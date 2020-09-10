var express = require("express");
var app = express();
app.use(express.json());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/api/v1/events", (req, res) => {
  res.status(200).send({

  });
 });

 app.post("/api/v1/event", (req, res, next) => {

  // console.log(req.body);
  // console.log(req.query);

  if (req.body.type != null &&
    req.body.id != null &&
    req.body.timestamp != null) {
      res.status(200).send({
        "success" : "true",
        "info" : ""
      });
  } else {
      res.status(404).send({
        "success" : "false",
        "info" : "Incorrect data"
      });
  }

 });