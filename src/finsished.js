const express = require("express");
const json = require("body-parser").json;
const morgan = require("morgan");

const app = express();

// applying middleware
app.use(json());
app.use(morgan("dev"));

//custom middleware
const log = (req, res, next) => {
  console.log(req.body);
  next();
};

// apply custom middleware
app.use(log);

// exact matching
app.get("/", (req, res, next) => {
  res.send({ message: "hello" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "ok" });
});

// Parameter matching :id is a wildcard which can be accessed through req.params.id
app.get("/project/:id", (req, res) => {
  res.send({ projectId: req.params.id });
});

// exact matching
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

// run with node src/index.js when in the root project folder
