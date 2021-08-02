
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
require('dotenv').config()


const uri = process.env.DB_URI

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  client.db("POI-task").collection("users");

  client.close();
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});