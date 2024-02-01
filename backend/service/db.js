const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

mongoose.connect("mongodb+srv://navneetnair:tsechacks123@cluster0.qmajlh9.mongodb.net/MedScan" ?? '').then(() => {
    console.log("connected the database");
});