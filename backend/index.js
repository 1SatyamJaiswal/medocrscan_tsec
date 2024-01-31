const express = require("express");
const cors = require("cors");
const { app2, storage } = require("./firebase");
const { ref, listAll } = require("firebase/storage");
const uploadRouter = require("./routes/upload");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/upload', uploadRouter);

app.listen(5000, () => {
  console.log("Server started!");
});
