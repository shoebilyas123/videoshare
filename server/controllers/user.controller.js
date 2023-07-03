const { signToken } = require("../utils/auth");
const { User } = require("../models");

exports.register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      res
        .status(400)
        .json({ err: "Name, username and password are mandatory" });
      return;
    }

    const payload = {
      name,
      username,
      password,
    };
    const newUser = await User.create(payload);
    const accessToken = signToken(newUser._id);
    res.status(201).json({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      accessToken,
      id: newUser._id,
    });
  } catch (err) {
    res.status(500).json({ err: "internal server error" });
  }
};

exports.login = expressAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(new AppError("Email and password are required", 404));
    return;
  }

  const userAuth = await User.findOne({ email });

  if (!userAuth) {
    next(new AppError("User has either been deleted or does not exist.", 404));
    return;
  }
  const isPasswordValid = await userAuth.isPasswordValid(
    userAuth.password,
    password
  );

  if (!isPasswordValid) {
    next(new AppError("Please provide a correct password", 400));
    return;
  }
  const user = await User.findOne({ email }).select("-password");

  const accessToken = signToken(user._id);
  res.status(201).json({
    userInfo: user,
    accessToken,
  });
});

exports.getCurrentUser = expressAsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id)
    .populate({
      path: "sentRequests",
      select: "name avatarColor _id profilePic",
    })
    .populate({
      path: "pendingRequests",
      select: "name avatarColor _id profilePic",
    })
    .populate({
      path: "friends",
      select: "name avatarColor _id profilePic",
    })
    .select("-password");

  if (!user) {
    next(new AppError("User has either been deleted or does not exist.", 404));
  }

  res.status(201).json(user);
});
