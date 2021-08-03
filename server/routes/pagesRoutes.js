const express = require("express");
const router = express.Router();
const app = express();
const apiController = require("../controllers/api.controller");
const populateAPIcontroller = require("../controllers/populateAPI.controllers")

router
  .get("/findPeopleNearMe/:location", async (req, res) => {
    try {
      const location = req.params.location
      const ans = await apiController.convertLocationAndDiscoverNearByUsers(location)
      res.status(200).send(ans);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  })
  .post("/populateDB", async (req, res) => {
    try {
      const ans = await populateAPIcontroller.populateDB()
      res.status(200).send(ans);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  });

module.exports = router;
