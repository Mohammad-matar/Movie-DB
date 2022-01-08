const express = require("express");
const { get } = require("express/lib/response");
const app = express();
const port = 3000;
const d = new Date();
d.getTime();
const hours = d.getHours();
const seconds = d.getSeconds();

app.get("/", (req, res) => {
  //get information bijib cha8let /nmare2la route */* ma3 call back function
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); // call back function
});

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  res.send({ status: 200, message: hours + ":" + seconds });
});
