const express = require("express");
const router = express.Router();
const app = express();
const apiController = require("../controllers/api.controllers");

router
  .get("/query", async (req, res) => {
    try {
     const ans = await apiController.fecthLocation()
      resstatus(200).send(ans)
    } catch (e) {
     res.status(400).send('failed to complete the query')
    }
  })
  .post("/initiateDB",async(req,res)=>{
    try{
      const newU = await apiController.initiateDB()
      res.send(newU)

    }catch(e){
      console.log(e)
      res.status(400).send("can't populate")
    }
  })

module.exports = router;