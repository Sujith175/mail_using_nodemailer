const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mail = require("./Controllers/mail");
const demo = require("./Controllers/mail");

dotenv.config();

app.use("/api/users", mail);
app.use(demo);
app.listen(process.env.PORT, () => {
  console.log("listening to port 5000");
});
