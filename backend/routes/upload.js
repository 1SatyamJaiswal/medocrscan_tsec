const express = require("express");
// const cors = require("cors");
const router = express.Router();
const multer = require("multer");
const Patient = require("../models/patient");
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

router.post("/", upload, async (req, res) => {
  if (req.file) {
    const filepath =
      "C:\\Users\\Prathamesh\\Desktop\\webdev\\medscannOCr\\New folder\\medocrscan_tsec\\backend\\" + req.file.path;
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

router.get("/getPatients", async (req, res) => {
  try {

    const arr = await Patient.find({})
    res.json({ arr });
  }
  catch (error) {
    console.log(error)
  }

})

router.get("/getPatients/:name", async (req, res) => {
  try {
    const name = req.params.name
    const data = await Patient.find({ name: name })
    res.json({ data });
  }
  catch (error) {
    console.log(error)
  }

})

router.get('/tests/:name/:testname', async (req, res, next) => {
  let test;
  const name = req.params.name;
  try {
    person = (await Patient.find({ name: name }));
    for (let i = 0; i < person[0].tests.length; i++) {
      console.log(Object.keys(person[0].tests[i])[0])
      if (Object.keys(person[0].tests[i])[0] == req.params.testname) {
        test = person[0].tests[i][Object.keys(person[0].tests[i])[0]];
        break;
      }
    }
    // console.log(test)
  }
  catch (err) {
    console.log(err);
  }
  if (!test) {
    return res.status(404).json({ message: "No patients found" })
  }
  return res.status(200).json({ test })
})

module.exports = router;
