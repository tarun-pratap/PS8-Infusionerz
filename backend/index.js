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

// app.use('/uploads', express.static(__dirname+'/uploads'));

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

// app.post('/get-all-records', async (req,res) => { 
//   const {token} = req.cookies;
//   const verifyUser = jwt.verify(token, process.env.SECRET_KEY);  
//     try {
//     const findData = await CustomerModel.find({owner:verifyUser.id});
//     res.send(findData);  
//     } catch (error) {
//       console.log(error);
//     }
// })

// app.post('/search-by-name', async (req, res) => {
//   const {token} = req.cookies;
//   const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
//   const { search } = req.body;  
//   const findData = await CustomerModel.find({owner:verifyUser.id, $or: [{name: {'$regex': search, '$options': 'i'}},  {address: {'$regex': search, '$options': 'i'}}, {itemName: {'$regex': search, '$options': 'i'}},{dateOfPurchase: {'$regex': search, '$options': 'i'}}]});
//   res.send(findData);
// })

// app.post('/delete-record', async (req,res) => {
//   const { _id } = req.body; 
//   await CustomerModel.deleteOne({_id})
//   const findData = await CustomerModel.find();
//   res.send(findData);
// })

// app.get('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const getData = await CustomerModel.findById(id);
//   res.send(getData);
// })

// app.put('/update-customer', async (req,res) => {
//   const {id, name, phone, address, itemName, totalAmount, amountPaid, amountToBePaid, dateOfPayment, dateOfPurchase, paymentHistory, amountHistory} = req.body;
//   const customerDoc = await CustomerModel.findById(id)
//     customerDoc.set({ 
//        name, phone, address, itemName, totalAmount, amountPaid, amountToBePaid, dateOfPayment, dateOfPurchase, paymentHistory, amountHistory
//     });   

//     await customerDoc.save();     
// })

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

// app.put('/update-user-details', async (req, res) => {
//   const {id, name, phone, email} = req.body;
//   const userDoc = await UserModel.findById(id)
//   userDoc.set({ name:name, phone, email}); 
//   await userDoc.save();
// })

// app.get('/logout', (req, res) => {
//     res.clearCookie('token');
//     res.json('ok');
// })

// // Multer Middleware
// const photosMiddleware = multer({dest:'uploads/'});

// app.post('/upload', photosMiddleware.array('photos', 10), (req,res) => {
//   const uploadedFiles = [];
//   for (let i = 0; i < req.files.length; i++) {
//     const {path,originalname} = req.files[i];
//     const parts = originalname.split('.');
//     const ext = parts[parts.length - 1];
//     const newPath = path + '.' + ext;
//     fs.renameSync(path, newPath);
//     uploadedFiles.push(newPath.replace('uploads/',''));
//   }
//   res.json(uploadedFiles);
// }) 

app.listen(port);