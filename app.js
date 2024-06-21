const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mail = require("./Controllers/mail");
dotenv.config();

app.use("/api/users", mail);

app.listen(5000, () => {
  console.log("listening to port 5000");
});
