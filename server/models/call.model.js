const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isPublic: { type: Boolean, default: false },
  isPrivate: { type: Boolean, default: true },
  membersInvited: [{ type: mongoose.Types.ObjectId }],
  callDuration: { type: Date },
  scheduledAt: { type: Date },
  isLive: { type: Boolean },
});

modulex.exports = mongoose.model('Call', callSchema);
