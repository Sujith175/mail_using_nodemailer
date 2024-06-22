const express = require("express");

const app = express();
const mail = require("./Controllers/mail");
const demo = require("./Controllers/mail");
require("dotenv").config;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", mail);
app.use(demo);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port}`);
});
