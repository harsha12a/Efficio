const express = require('express')
const userApp = express();
const User = require('../model/users/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')
userApp.use(express.json())

// userApp.get('/',(req,res)=>{
//     res.send("Welcome to User API")
// })

userApp.post('/create', asyncHandler(async (req, res) => {
    let newn = req.body
    let hashedPass = await bcrypt.hash(newn.password,10);
    newn.password = hashedPass
    let newUser = new User(newn);
    newUser.save({ runValidators: true })
        .then((result) => {
            res.status(201).json({ message: "User created successfully", user: newUser });
        })
        .catch((err) => {
            res.status(400).json({ message: "Error creating user", error: err.message });
        })

}))

userApp.post('/login',asyncHandler(async(req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(user === null){
        res.status(404).send({msg : "User not found"})
    }
    else {
        let result = await bcrypt.compare(req.body.password, user.password);
        if(!result){
            res.send({msg : "incorrect password"})
        } else {
            res.send({message : "login success", payload : user})
        }
    }
    
}))

userApp.put('/edit/:id', asyncHandler(async (req,res) => {
    let {id} = req.params
    const updated = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { ...updated },
            { runValidators: true, new: true } 
        );
        if(!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } 
    catch (err) {
        res.status(400).json({ message: "Error updating user", error: err.message });
    }
}))

userApp.delete('/delete/:id', asyncHandler(async (req,res)=> {
    let {id} = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (err) {
        res.status(400).json({ message: "Error deleting user", error: err.message });
    }

}));

module.exports = userApp