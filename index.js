const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Result Management System");
});

app.listen(port, () => {
  console.log(`Result Management system is listening on port ${port}`);
});
