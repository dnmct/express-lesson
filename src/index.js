const express = require("express");
// import express from 'express'
const json = require("body-parser").json;

const app = express();

app.use(json());

app.get("/hello", (req, res) => {
  res.send({ message: "hello" });
});

app.post("/hello", (req, res) => {
  if (req.body.greeting) {
    console.log(req.body.greeting);
    return res.send({ status: "ok" });
  }
  console.log("Please give a greeting");
  res.status(404).send({ status: "not ok" });
});

app.post("/bye", (req, res) => {
  let defaultValue = !req.body.default;
  res.send({ ...req.body, default: defaultValue });
});

app.listen(3000, () => {
  console.log("Server is running");
});
