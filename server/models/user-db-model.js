const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  location: {
    geometry: {
      type: {
        type: String,
        required: true,
      },
      coordinates: {
        type: Array,
        required: true,
      },
    },
    properties: {
      locationID: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  },
});

const UserDBModel = mongoose.model("user", userSchema);

module.exports = { UserDBModel };
