const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT || 8000, () => {
  console.log("backend server is running");
});
app.get("/api/test", (req, res) => {
  res.send("server is up and running");
});
