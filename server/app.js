const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use("/api/v1/user", userRoutes);

module.exports = app;
