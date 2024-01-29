require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("/twitter response by mustafa zuberi.");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login At Chai or Code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("Chai or Code");
});

app.get("/github-profile", async (req, res) => {
  const url = "https://api.github.com/users/mustafazuberi";
  fetch(url)
    .then((dataJson) => dataJson.json().then((data) => res.send(data)))
    .catch((err) => res.send(err.message));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
