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
    }
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

app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})