const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const publicAccess =
  "mongodb+srv://publicUser:publicUser@cluster0.irz1b.mongodb.net/POI-task?retryWrites=true&w=majority";
const uri = process.env.DB_URI || publicAccess;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  client.db("POI-task").collection("users");

  client.close();
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
