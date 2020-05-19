const express = require("express");
const app = express();
app.get("/", function (rq, res) {
  res.sendFile(__dirname + "/index.html");
});
app.listen(1234, function () {
  console.log("Calculator started at port 1234");
});
