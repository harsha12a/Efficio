const express = require('express')
const app = express()
require('dotenv').config()
const userApi = require('./APIs/userApi')
const mongoose = require('mongoose')


// mongoose.connect
app.listen(process.env.PORT,() => console.log('Server is running'))

app.use('/user',userApi)

app.use('/',(req,res)=>{
    res.send("Welcome to Efficio Server")
})

app.use('*',(req,res,next)=>{
    res.send({message:`Invalid path ${req.url}`})
})

app.use((err,req,res,next)=>{
    res.send({message:'Error',errMsg:err})
})