import React from 'react'
import { useForm } from 'react-hook-form';
function TaskForm({func, setVisible, obj}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div>
        
        <form className="former" action="" onSubmit={handleSubmit(func)}>
          <div className="d-flex flex-row justify-content-between align-items-center">
          <h1>Add Task</h1>
          <h2 style={{cursor : "pointer"}} onClick={() => {setVisible(false)}}>✖</h2>
          </div>
          <label htmlFor="title">Title</label>
          <input type="text" {...register("title", { required: true })} id="" placeholder={obj.title}/>
          {errors.title && <p className="text-danger">Title is required</p>}
          <label htmlFor="description">Description</label>
          <input
            type="text"
            {...register("description", { required: true })}
            id=""
            placeholder={obj.description}
          />
          {errors.description && (
            <p className="text-danger">Description is required</p>
          )}
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            {...register("deadline", { required: true })}
            id=""
            placeholder={obj.deadline}
          />
          {errors.deadline && (
            <p className="text-danger">Deadline is required</p>
          )}
          <label htmlFor="status">Status</label>
          <div className="m-auto text-center">
          <label htmlFor="status-pending">
            <input
              type="radio"
              id="status-pending"
              value="pending"
              {...register("status", { required: true })}
              placeholder={obj.status}
            />
            Pending
          </label>

          <label htmlFor="status-completed">
            <input
              type="radio"
              id="status-completed"
              value="completed"
              {...register("status", { required: true })}
            />
            Completed
          </label>
          </div>
          {errors.status && <p className="text-danger">Status is required</p>}
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TaskForm