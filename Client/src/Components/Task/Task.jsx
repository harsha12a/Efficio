import React from 'react'
import './Task.css'
import { MdOutlineDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import TaskForm from '../Taskadder/TaskForm';
import { useState } from 'react';
function Task({task}) {
  let user = JSON.parse(sessionStorage.getItem("user"));
  let [visible, setVisible] = useState(false);
  let deleteTask = (task) =>{
    axios.delete(`https://efficio-one.vercel.app/task/${user.email}/${task._id}`)
  }
  let update = (tasks) =>{
    
    tasks = { ...tasks, createdAt: task.createdAt, closedAt: task.closedAt, _id: task._id };
    axios.put(`https://efficio-one.vercel.app/task/${user.email}/${task._id}`,tasks)
    setVisible(false);
  }
  return (
    <div className='mb-3 block d-flex flex-column bg-secondary p-3 flex-wrap'>
      {
        visible&&<TaskForm addTask={update} setVisible={setVisible} obj={task} func={update}/>
      }
      <div className='d-flex justify-content-between'>
        <div><b>Title</b>-{task.title}</div>
        <MdOutlineDelete onClick={() => deleteTask(task)} className='fs-3' style={{cursor:"pointer"}}/>
      </div>
      
      <div className='d-flex justify-content-between'>
        <div><b>Description</b>-{task.description}</div>
        <MdEdit onClick={()=>{setVisible(true)}} style={{cursor:"pointer"}} className='mt-2 fs-3' /></div>
      <div><b>Status</b>-{task.status}</div>
      <div><b>Deadline</b>-{task.deadline.substr(0,10)}</div>
    </div>
  )
}

export default Task