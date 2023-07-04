const express = require("express");
const mongoose = require("mongoose");
const accountModel = require("./models/accountModel");
const dotenv = require("dotenv").config();

const port = process.env.PORT;
const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to DB...");
});

app.get("/", (req, res) => {
  res.json({
    message: "Server Ok",
  });
});

app.get("/test", async (req, res) => {
  try {
    const data = await accountModel.find();
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
