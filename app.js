const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello Backend",
  });
});

app.listen(5000, () => {
  console.log("Server is running on Port 5000");
});
