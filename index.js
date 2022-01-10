const { response } = require("express");
const e = require("express");
const express = require("express");
const res = require("express/lib/response");
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

app.get(["/hello/:id", "/hello"], (req, res) => {
  if (req.params.id !== undefined) {
    res.send({ status: 200, message: `Hello, ${req.params.id}` });
  } else {
    res.send({ status: 404, message: "ID Not Found, Enter Your ID" });
  }
});

app.get("/search", (req, res) => {
  if (req.query.s !== undefined) {
    res.send({ status: 200, message: "ok", data: req.query.s });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});
