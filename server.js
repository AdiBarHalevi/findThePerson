const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const UsersRoutes = require("./server/routes/users-routes");

require("dotenv").config();
require("./server/db/mongoose");

const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/users", UsersRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
