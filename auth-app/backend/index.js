const express = require('express') 
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://mongo:12345@cluster0.tflzovq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name: String,
    birthdate: Number,
    idType: String,
    idNum: String,
    occupation: String,
    gender: String,
    mobileNo: String
    
})

const User = mongoose.model('user',UserSchema)

const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',cors(),(req,res)=>{

})

app.post('/',async(req,res)=>{
    const {email,password} = req.body

    try{
        const check = await User.findOne({email:email})
        if(check){
            res.send("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
    
})

app.post('/signup',async(req,res)=>{
    const {email,password} = req.body

    const data = {
        email: email,
        password: password
    }

    try{
        const check = await User.findOne({email:email})
        console.log(check)
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
    
})

app.post('/find',async(req,res)=>{
    const {email} = req.body

    try{
        const check = await User.findOne({email:email})
        if(check){
            res.json(check)
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post('/feed',async(req,res)=>{
    const {email,name,birthdate,idType,idNum,occupation,gender,mobileNo} = req.body

    try{
        const check = await User.updateOne({email:email},{
            $set: {name: name,birthdate: birthdate,idType: idType,idNum: idNum,occupation: occupation,gender: gender,mobileNo: mobileNo}
        })
        if(check){
            res.json("Done")
        }
        else{
            res.json("Fault")
        }
    }
    catch(err){
        res.json("Fault in our stars")
    }
})

app.post('/user',async(req,res)=>{
    const {birthdate} = req.body

    try{
        const check = await User.find({birthdate:{$gte:birthdate}})
        if(check){
            res.json(check)
            console.log(check)
        }
        else{
            res.json("Nothing Found")
        }
    }
    catch(err){
        res.json("Fault in our stars")
    }
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})