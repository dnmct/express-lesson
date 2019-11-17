const express = require("express");
const json = require("body-parser").json;
const morgan = require("morgan");

const app = express();

app.use(json());
app.use(morgan("dev"));

const log = (req, res, next) => {
  console.log("logging");
  next();
};

app.use(log);

app.get("/", (req, res, next) => {
  res.send({ message: "hello" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "ok" });
});

app.get("/project/:id", (req, res) => {
  res.send({ projectId: req.params.id });
});

app
  .route("/data")
  .get((req, res) => {
    res.send({ ok: true });
  })
  .post()
  .put()
  .delete();

app.listen(3000, () => {
  console.log("Server is running");
});
