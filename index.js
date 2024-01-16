require("dotenv").config();

const express = require("express");
const app = express();
// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello pingu!");
});

app.get("/mypost", (req, res) => {
  res.send("Sending response for the requested mypost route");
});

app.get("/html", (req, res) => {
  res.send("<h1>Hello World</h1> <h2>This is h2 tag </h2>");
});

app.get("/nigga", (req, res) => {
  res.send("Hi my nigs");
});

const myData = {
  "first user": {
    name: "example text",
    "roll number": "19380123",
    password: "adhasdjhas",
    address: "asjdakdshaksd",
  },
  "second user": {
    name: "example text3",
    "roll number": "193824320123",
    password: "adhasdjha1231s",
    address: "asjdakdshaksadas3333d",
  },
};

app.get("/myData", (req, res) => {
  res.json(myData);
});

app.listen(process.env.MY_PORT, () => {
  console.log(`Server is listening on port ${process.env.MY_PORT}`);
});
