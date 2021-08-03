const { UserDBModel } = require("../models/user-db-model");

const findPeopleInProximity = async (longitude, latitude,amountOfUsers) => {
  try {
    return await UserDBModel.find({
      "location.geometry.coordinates": {
        $near: {
          $geometry: { type: "Point", coordinates: [longitude, latitude] },
        },
      },
    }).limit(Number(amountOfUsers));
  } catch (e) {
    return { error: e };
  }
};

module.exports = { findPeopleInProximity };
