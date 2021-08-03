const express = require("express");
const router = express.Router();
const app = express();
const apiController = require("../controllers/api.controller");
const populateAPIcontroller = require("../controllers/populateAPI.controllers")

router

  // TODO KEEP THIS? WORKS ONLY ON DEV
  .get("/findPeopleNearMe/:location", async (req, res) => {
    try {
      const location = req.params.location
      const ans = await apiController.convertLocationAndDiscoverNearByUsers(location)
      res.status(200).send(ans);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  })
  .get("/findPeopleByGeoLocation/:longtitude/:latitude", async (req, res) => {
    try {
      const latitude = req.params.latitude
      const longtitude = req.params.longtitude
      const ans = await apiController.findPeopleByGeoLocation(longtitude,latitude)
      res.status(200).send(ans);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  })
  // WORKS ONLY ON DEV - restricted access to db credentials
  .post("/populateDB", async (req, res) => {
    try {
      const ans = await populateAPIcontroller.populateDB()
      res.status(200).send(ans);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  });

module.exports = router;
