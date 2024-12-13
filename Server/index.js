const express = require('express')
const app = express()
require('dotenv').config()
const userApi = require('./APIs/userApi')
const taskApi = require('./APIs/taskApi')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use(express.urlencoded({extended : true}))

main()
    .then((res) => {
        console.log("connection successfull");
    })
    .catch((err) => {
        console.log(err);
    })
async function main(){
    await mongoose.connect(process.env.DB_URL);
}

app.listen(process.env.PORT,() => console.log('Server is running'))

app.use('/user',userApi)
app.use('/task', taskApi)

app.use('/',(req,res)=>{
    res.send("Welcome to Efficio Server")
})

app.use('*',(req,res,next)=>{
    res.send({message:`Invalid path ${req.url}`})
})

app.use((err,req,res,next)=>{
    res.send({message:'Error',errMsg:err})
})