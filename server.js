const express = require("express");

const mongoose = require("mongoose");
const logger = require("morgan");
//const router = require("./routes/api.js");
const PORT = process.env.PORT || 3000;

//const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   //useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
