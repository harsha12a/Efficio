import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import Task from "../Task/Task";
import { useForm } from "react-hook-form";
import TaskForm from "../Taskadder/TaskForm";
function Dashboard() {
  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  let user = JSON.parse(sessionStorage.getItem("user"));
  let [tasks, setTask] = useState([]);
  let [visible, setVisible] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:3001/task/${user?.email}`).then((res) => {
      setTask(res.data.tasks)
    });
  }, [user]);
  let addTask = (data) => {
    axios
      .post(`http://localhost:3001/task/${user?.email}`, data)
      .then((res) => {
        setTask([res.data.tasks, ...tasks]);
      })
    setVisible(false);
  };
  let obj={
    title:'',
    description:'',
    status:'',
    deadline:''
  }
  return (
    <>
      {visible && (
        <TaskForm func={addTask} setVisible={setVisible} obj={obj}/>
      )}
      <h1 className="text-center m-5">Dashboard</h1>
      <div className="d-flex justify-content-between flex-wrap">
        <h2 className="m-2">Tasks</h2>
        <button
          onClick={() => {
            setVisible(true);
          }}
          className="btn btn-dark m-2"
          style={{ width: "200px" }}
        >
          Add task
        </button>
      </div>
      <div className="task mx-auto d-flex flex-column flex-wrap justify-content-center align-items-center m-1">
        {tasks.length === 0 ? (
          <h3>No tasks found</h3>
        ) : (
          <div>
            {tasks.map((task, ind) => (
              <Task task={task} key={ind} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
