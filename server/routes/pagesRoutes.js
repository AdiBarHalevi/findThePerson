const express = require("express");
const router = express.Router();
const app = express();
const {findPeopleInProximity} = require("../controllers/query-controller");

router
  .get("/find-people-by-geo-location/:longtitude/:latitude", async (req, res) => {
    try {
      const latitude = req.params.latitude
      const longtitude = req.params.longtitude
      const usersByProximity = await findPeopleInProximity(longtitude,latitude)
      res.status(200).send(usersByProximity);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  });
module.exports = router;
