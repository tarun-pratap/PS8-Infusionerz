const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    fullname: String,
    genderValue: String,
    phone: Number,
    dob: Date,
    email: String,
    pincode: Number,
    address: String,
    education: String,
    income: Number,
    occupation: String,
    nriSwitchValue: String,
    smokerSwitchValue: String,
    employeeSwitchValue: String,
    diabeteSwitchValue: String,
    class_diabetes: String,
    years_diabetes: Number,
    hba1c: String,
    bmi: Number,
    bloodSwitchValue: String,
    insulinSwitchValue: String,
    hospitalSwitchValue: String,  
})

const PolicyModel = mongoose.model('PolicyCollection', PolicySchema);
module.exports = PolicyModel;