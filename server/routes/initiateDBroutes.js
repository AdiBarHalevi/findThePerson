const express = require("express");
const router = express.Router();
const apiController = require("../controllers/populateAPI.controllers");

router
  .post("/populateDB", async (req, res) => {
    try {
      const newU = await apiController.initiateDB();
      res.send(newU);
    } catch (e) {
      console.log(e);
      res.status(400).send("can't populate");
    }
  })
module.exports = router;