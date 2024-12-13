// const mongoose = require('mongoose');
// const User = require('../model/users/userModel')
// require('dotenv').config({ path: '../.env' });

// main()
//     .then((res) => {
//         console.log("connection successfull");
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// async function main(){
//     await mongoose.connect(process.env.DB_URL);
// }

// const userObject = {
//     name: "John Doe",
//     password: "JohnDoe123",
//     email: "johndoe@example.com",
//     phone: 1234567890,
//     age: "30",
//     country: "USA"
// };

// const initUsers = async () => {
//     await User.insertMany(userObject, {runValidators : true, new : true});
//     console.log("ok");
// }

// initUsers();