const express = require("express");
const router = express.Router();
const { findPeopleInProximity } = require("../controllers/users-controller");

router.get("/proximity", async (req, res) => {
  try {
    const { latitude, longitude, limit } = req.query;
    if (!latitude && !longitude && !limit) {
      return res.status(400).send({ error: "invalid search terms" });
    }
    const usersByProximity = await findPeopleInProximity(
      longitude,
      latitude,
      limit
    );
    res.status(200).send(usersByProximity);
  } catch (e) {
    res.status(400).send("failed to complete the query");
  }
});
module.exports = router;
