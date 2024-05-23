const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type:String},
    phone: {type:Number},
    email: {type:String},
    password: {type:String},
    token: {type:String},
})

const UserModel = mongoose.model('UserCollection', UserSchema);
module.exports = UserModel;