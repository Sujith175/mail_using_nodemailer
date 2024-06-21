const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mail = require("./Controllers/mail");
dotenv.config();

app.use("/api/users", mail);

app.get("/", (req, res, next) => {
  res.send("hello");
});
app.listen(process.env.PORT, () => {
  console.log("listening to port 5000");
});
