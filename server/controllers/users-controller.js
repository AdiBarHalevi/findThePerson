const { UserDBModel } = require("../models/user-db-model");

const findPeopleInProximity = async (longitude, latitude,limit) => {
  try {
    return await UserDBModel.find({
      "location.geometry.coordinates": {
        $near: {
          $geometry: { type: "Point", coordinates: [longitude, latitude] },
        },
      },
    }).limit(Number(limit));
  } catch (e) {
    return { error: 'Error while locating near users' };
  }
};

module.exports = { findPeopleInProximity };
