// const http = require("http");

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/products' method='POST'><input type='text' name='title'><button>Add Product</button></form>"
  );
});

app.use("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hi fron ExpressJS!</h1>");
});

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);
