const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://faheem:1234@cluster0-ip993.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("db connected");
  });

const Schema = mongoose.Schema({
  task: String
});

const DB = mongoose.model("yasir", Schema);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  DB.find({}).then(data => res.json(data));
});

app.post("/test", (req, res) => {
  const data = {
    task: req.body.value
  };

  new DB(data).save();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server Working fine");
});
