require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(cors('http://localhost:5173'));

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

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "title joke 1",
      description: "this is description 3",
    },
    {
      id: 2,
      title: "title joke 2",
      description: "this is description 2",
    },
    {
      id: 3,
      title: "title joke 3",
      description: "this is description 3",
    },
    {
      id: 4,
      title: "title joke 4",
      description: "this is description 4",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
