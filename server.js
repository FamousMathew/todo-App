let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("Welcome to our App");
});

app.listen(3000);
