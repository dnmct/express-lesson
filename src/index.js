const express = require("express");
const json = require("body-parser").json;
const morgan = require("morgan");

const app = express();

app.use(json());
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.send({ message: "hello" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "ok" });
});

app.listen(3000, () => {
  console.log("Server is running");
});
