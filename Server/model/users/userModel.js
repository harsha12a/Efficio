const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    phone : {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid phone number! It should be 10 digits.`
        },
    },
    age : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;