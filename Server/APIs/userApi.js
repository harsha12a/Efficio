const express = require('express')
const userApp = express()

userApp.use(express.json())

userApp.get('/',(req,res)=>{
    res.send("Welcome to User API")
})

module.exports = userApp