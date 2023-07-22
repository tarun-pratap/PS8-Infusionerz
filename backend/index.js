require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const UserModel = require('./models/User')
const PolicyModel = require('./models/Policy')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  ); 
  
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {console.log("Connected")}).catch((error) => {console.log(error)});

const bcryptGen = bcrypt.genSaltSync(12);

app.post('/register', async (req,res) => {
  const {name, phone, email, password} = req.body;
  const checkData = await UserModel.findOne({email});
  const checkPData = await UserModel.findOne({phone});

  if(checkData || checkPData){
    res.send('Account already present !! Please login');
  }

  else {
    const result = await UserModel.create({
      name, phone, email, password: bcrypt.hashSync(password, bcryptGen)
    })
  
    res.json(result); 
  }  
})

app.post('/policy-form', async (req,res) => {
  // const {token} = req.cookies;    
  // const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
  const {fullname,
    phone,
    dob,
    email,
    pincode,
    address,
    income,
    occupation,
    education,
    genderValue,
    nriSwitchValue,
    smokerSwitchValue,
    emSwitchValue,
    bloodSwitchValue, bmi,insulinSwitchValue, hospitalswitchValue, diabeteSwitchValue } = req.body;

  // console.log(verifyUser);

  const policyDoc = await PolicyModel.create({
    // owner:verifyUser.id,
    fullname,
            phone,
            dob,
            email,
            pincode,
            address,
            income,
            occupation,
            education,
            genderValue,
            nriSwitchValue,
            smokerSwitchValue,
            emSwitchValue,
            bloodSwitchValue, bmi,insulinSwitchValue, hospitalswitchValue, diabeteSwitchValue           
  })

  // const formData = req.body; 
  // // console.log(formData);

  // const policyDoc = await PolicyModel.create({
  //     // owner:verifyUser.id,
  //     email: formData.email,                          
  //             pincode: formData.pincode,
  //             address: formData.address,
  //             income: formData.income,
  //             occupation: formData.occupation,                     
  //   })

  res.send("Record Added")
  
})

app.post('/user-login', async (req, res) => {
  const { email, password } = req.body; 
  const UserDoc = await UserModel.findOne({ email })
  if (UserDoc) {
    const passOk = bcrypt.compareSync(password, UserDoc.password);
    if(passOk){
        const token = jwt.sign({email:UserDoc.email, id:UserDoc._id}, process.env.SECRET_KEY);
        res.cookie('token', token).json('Working Successfully');
        await UserModel.updateOne({_id: UserDoc._id}, { token });
    } else {
        res.status(422).send("incorrect password")
    }    
  } else {
    res.json("not found");
  }
})

app.get('/login-token', async (req,res) => {
  const { token } = req.cookies; 
  if(token){
    try {
      const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
      const findData = await UserModel.find({ email:verifyUser.email });
      res.send(findData);
      } catch (error) {
        console.log(error);
      }
  }   

  else {
      res.send('')
  }
  
})

app.listen(port);