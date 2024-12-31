const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    enum: ["poland", "usa"],
    default: "poland",
  },

  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
