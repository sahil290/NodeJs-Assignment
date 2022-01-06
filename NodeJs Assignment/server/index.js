const express = require("express");
//Lets initialize our app
const app = express();
const mongoose = require("mongoose");
const item = require("./Routes/ProductRoutes");
//Lets create  some middle walkRules
app.use(express.json());
app.use("/item",item)
//Our DB Url
const url =
  "mongodb+srv://sahil1998:sahil1998@cluster0.iow8n.mongodb.net/ProductsData?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true }, () => {
  try {
    console.log("Connected to Database successfully");
  } catch (err) {
    console.log("Error connecting");
  }
});
//Our Server
const port = 5000;

app.listen(port, () => {
  try {
    console.log(`Server is running on ${port}`);
  } catch (err) {
    console.log("Error listening on port");
  }
});
