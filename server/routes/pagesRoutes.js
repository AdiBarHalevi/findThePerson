const express = require("express");
const router = express.Router();
const app = express();
const {findPeopleInProximity} = require("../controllers/query-controller");

router
  .get("/find-people-by-geo-location/:longitude/:latitude", async (req, res) => {
    try {
      const latitude = req.params.latitude
      const longitude = req.params.longitude
      const usersByProximity = await findPeopleInProximity(longitude,latitude)
      res.status(200).send(usersByProximity);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  });
module.exports = router;
