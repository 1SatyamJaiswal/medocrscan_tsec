const express = require("express");
// const cors = require("cors");
const uploadRouter = express.Router();
const multer = require("multer");
// const subprocess = require("subprocess");

const storage2 = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    const name = file.originalname;
    const filename = name;
    req.body.mime_type = file.mimetype;
    req.body.filename = filename;
    cb(null, filename);
  },
});

const upload = multer({
  dest: "uploads/",
  key: function (req, file, cb) {
    const filename = "ab" + ".pdf";
    req.body.mime_type = "application/pdf";
    req.body.filename = filename;
    cb(null, filename);
  },
  storage: storage2,
}).single("file");

uploadRouter.post("/", upload, async (req, res) => {
  if (req.file) {
    const filepath =
      "C:\\Users\\Prathamesh\\Desktop\\webdev\\medscannOCr\\medocrscan_tsec\\backend\\" + req.file.path;
    const response = await fetch("http://localhost:5001/get_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filepath: filepath }),
    });
    // const response = 'hello'
    const data = await response.json();
    console.log(data)

    // const response2 = await fetch("http://localhost:5002/get_data", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ filepath: filepath }),
    // });
    // const data2 = await response2.json();
    // console.log(data2);

    res.json({ status: "1", data: { data } });
    // console.log(req.file);
  } else {
    res.json({ status: "0" });
  }
  console.log(req.file, req.body);
});

module.exports = uploadRouter;