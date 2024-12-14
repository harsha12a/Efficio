import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Import your user context if applicable
import { UserLoginContext } from "../../context/UserLoginContext";
import "./Login.css";
function Login() {
  let { err, loginuser, status, curr } = useContext(UserLoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  useEffect(() => {
    if (status === true) navigate("../dashboard");
  }, [status]);
  const onUserLogin = (credentials) => {
    loginuser(credentials);
  };

  return (
    <div className="">
      <h2 className="mt">User Login</h2>
      <div>
        <div className="col-sm-10 mx-auto col-md-6 col-lg-4">

          {err && <p className="text-danger text-center">{err}</p>}
          <form
          
            onSubmit={handleSubmit(onUserLogin)}
            className="p-4 border rounded bg-"
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
            <button type="submit" id="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
