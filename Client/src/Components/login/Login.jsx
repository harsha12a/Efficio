import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Import your user context if applicable
import { UserLoginContext } from "../../context/UserLoginContext";
import './Login.css'
function Login() {
  let {err,loginuser,status,curr} = useContext(UserLoginContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onUserLogin = async (credentials) => {
    // try {
    //   const res = await axios.get("http://localhost:3000/users", credentials);
    //   if (res.data.length !== 0) {
    //     localStorage.setItem("token", data.token);
    //     navigate("/home");
    //   } else {
    //     setErr("User not found");
    //   }
    // } catch (error) {
    //   setErr("Something went wrong. Please try again later.",error);
    // }
    loginuser(credentials)
    if(status===true) {console.log(curr); navigate('/')}
  };

  return (
    <div>
      <h2 className="mt">User Login</h2>
      <div className="row">
        <div className="col-10 col-md-6 mx-auto">
          {err && <p className="text-danger text-center">{err}</p>}
          <form
            onSubmit={handleSubmit(onUserLogin)}
            className="p-4 border rounded bg-light"
          >
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;