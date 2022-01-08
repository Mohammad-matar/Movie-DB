const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //get information bijib cha8let /nmare2la route */* ma3 call back function
    res.send("ok");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`); // call back function
});