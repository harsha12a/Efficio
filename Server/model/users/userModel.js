const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
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
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid phone number! It should be 10 digits.`
        },
    },
    age : {
        type : Number,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    tasks: [
        {
            title: String,
            description: String,
            status: {
                type: String,
                enum: ['pending', 'in-progress', 'completed'],
                default: 'pending'
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            closedAt: {
                type: Date
            },
            deadline: {
                type: Date
            }
        }
    ],
    assigned: [
        {
            title: String,
            description: String,
            assignedTo: {
                type: String,
                required: true
            },
            assignedBy: String
        }
    ]
});

UserSchema.pre('save', function (next) {
    this.tasks.forEach(task => {
        if (task.status === 'completed' && !task.closedAt) {
            task.closedAt = new Date();
        } else if (task.status !== 'completed') {
            task.closedAt = null;
        }
    });
    next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;