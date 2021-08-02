const express = require("express");
const router = express.Router();
const app = express();
const apiController = require("../controllers/populateAPI.controllers");

router
  .get("/findPeopleNearMe", async (req, res) => {
    try {
      const ans = "here"
      res.status(200).send(ans);
    } catch (e) {
      res.status(400).send("failed to complete the query");
    }
  });

module.exports = router;
