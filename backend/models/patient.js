const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },
    age: Number,
    gender: String,
    reported: Date,
    test_name: String,
    tests: Array,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
