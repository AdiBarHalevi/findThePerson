const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const PagesRoutes = require("./server/routes/pagesRoutes");

require("dotenv").config();
require("./server/db/mongoose");

const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// TODO change to the name
app.use("/query", PagesRoutes);

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
