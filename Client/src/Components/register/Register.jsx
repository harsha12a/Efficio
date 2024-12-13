import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './Register.css'


function Register() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // Handle user registration
  const onUserRegister = async (newUser) => {
    try {
      const res = await fetch("http://localhost:4000/user-api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (data.message === "User registered successfully") {
        navigate("/login");
      } else {
        setErr(data.message);
      }
    } catch (error) {
      setErr("Something went wrong. Please try again later.");
    }
  };

  return (
    <div  class="container">
      
      <h2 className="text-center ">User Registration</h2>
      <div className="row">
        <div className="col-10 col-md-6 mx-auto">
          {err && <p className="text-danger text-center">{err}</p>}
          <form
            onSubmit={handleSubmit(onUserRegister)}
            className="p-4 border rounded bg-light"
          >
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <p className="text-danger">{errors.username.message}</p>
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

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

            {/* Mobile Number */}
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                className="form-control"
                {...register("mobile", { required: "Mobile number is required" })}
              />
              {errors.mobile && (
                <p className="text-danger">{errors.mobile.message}</p>
              )}
            </div>

            {/* Profile Image */}
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Profile Image URL
              </label>
              <input
                type="text"
                id="profileImage"
                className="form-control"
                {...register("profileImage", {
                  required: "Profile image URL is required",
                })}
              />
              {errors.profileImage && (
                <p className="text-danger">{errors.profileImage.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;