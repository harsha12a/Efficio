const express = require('express')
const taskApp = express();
const User = require('../model/users/userModel');
const asyncHandler = require('express-async-handler');
taskApp.use(express.json())


const createTask = async (useremail, taskData) => {
    try {
        const user = await User.findOne({email : useremail});
        if (!user) {
            throw new Error("User not found");
        }

        user.tasks.push(taskData);
        await user.save();
        console.log("Task added successfully");
        return user.tasks[user.tasks.length - 1];
    } catch (error) {
        console.error("Error creating task:", error.message);
        throw error;
    }
};

const updateTask = async (useremail, taskId, updatedData) => {
    try {
        const user = await User.findOne({email : useremail});
        if(!user) {
            throw new Error("User not found");
        }
        const task = user.tasks.id(taskId);
        if(!task) {
            throw new Error("Task not found");
        }
        Object.assign(task, updatedData);
        await user.save();
        console.log("Task updated successfully");
        return task;
    } catch (error) {
        console.error("Error updating task:", error.message);
        throw error;
    }
};

const deleteTask = async (useremail, taskId) => {
    try {
        const user = await User.findOne({email : useremail});
        if (!user) {
            throw new Error("User not found");
        }

        const task = user.tasks.id(taskId);
        if (!task) {
            throw new Error("Task not found");
        }

        user.tasks = user.tasks.filter(task => task._id.toString() !== taskId);
        await user.save();
        console.log("Task deleted successfully");
        return { success: true, message: "Task removed successfully" };
    } catch (error) {
        console.error("Error deleting task:", error.message);
        throw error;
    }
};

taskApp.post('/:email', async (req, res) => {
    try {
        const tasks = await createTask(req.params.email, req.body);
        res.status(201).json({ success: true, tasks:tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

taskApp.get('/:email', async (req, res) => {
    let usermail = req.params.email;
        const user = await User.findOne({email : usermail});
        if(!user) {
            res.status({message : "User not found"})
        }
        res.send({message : "User found", tasks : user.tasks})
});

taskApp.put('/:email/:taskId', async (req, res) => {
    try {
        const task = await updateTask(req.params.email, req.params.taskId, req.body);
        res.status(200).json({ success: true, task });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

taskApp.delete('/:email/:taskId', async (req, res) => {
    try {
        await deleteTask(req.params.email, req.params.taskId);
        res.status(200).json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = taskApp