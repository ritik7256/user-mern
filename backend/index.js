const express=require('express');
const server=express();

//mongo

const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/demo');
const userSchema=new mongoose.Schema({
    username:String,
    password:String
})
const User=mongoose.model('User',userSchema);



const cors=require('cors');
const bodyParser=require("body-parser");

server.use(cors());
server.use(bodyParser.json());

server.get("/demo",async(req,res)=>{
   const docs =await User.find({});
   res.json(docs)

})
server.post("/demo",async (req,res)=>{
   const user=new User()
   user.username=req.body.username;
   user.password=req.body.password;
 const doc=  await user.save();
 console.log(doc)
   res.json(doc)
})
server.listen(8080,()=>{
    console.log("server started");

});
 