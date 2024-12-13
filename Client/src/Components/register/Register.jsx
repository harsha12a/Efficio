import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // Handle user registration
  const onUserRegister = async (newUser) => {
    if (newUser.checkPassword !== newUser.password)
      setErr("Passwords doesn't match");
    else {
      const { checkPassword, ...newn } = newUser;
    console.log(newn)
    try {
      const res = await axios.post("http://localhost:3001/user/create", newn)
      if (res.data.message === "User created successfully") {
        navigate("/login");
        setErr("");
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      setErr("Something went wrong. Please try again later.", error);
    }
  }
  };

  return (
    <div className="container">
      <h2 className="mt">User Registration</h2>
      <div className="row">
        <div className="col-10 col-md-6 mx-auto">
          {err && <p className="text-danger text-center">{err}</p>}
          <form
            onSubmit={handleSubmit(onUserRegister)}
            className="p-4 border rounded bg-light"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                {...register("name", { required: "Username is required" })}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </div>

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

            <div className="mb-3">
              <label htmlFor="checkPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="checkPassword"
                className="form-control"
                {...register("checkPassword", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.checkPassword && (
                <p className="text-danger">{errors.checkPassword.message}</p>
              )}
            </div>

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

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                {...register("phone", {
                  required: "Mobile number is required",
                })}
              />
              {errors.phone && (
                <p className="text-danger">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="country"
                id="country"
                className="form-control"
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && (
                <p className="text-danger">{errors.country.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="age"
                id="age"
                className="form-control"
                {...register("age", { required: "Age is required" })}
              />
              {errors.age && (
                <p className="text-danger">{errors.age.message}</p>
              )}
            </div>

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
