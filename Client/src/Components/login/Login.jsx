import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Import your user context if applicable
// import { userLoginContext } from "../../contexts/userLoginContext";
import './Login.css'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // Example: Using context for managing logged-in user state
  // const { setUser } = useContext(userLoginContext);

  // Handle login
  const onUserLogin = async (credentials) => {
    try {
      const res = await fetch("http://localhost:4000/user-api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (data.message === "Login successful") {
        // Example: Save user details in context or local storage
        // setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home"); // Redirect to the home/dashboard page
      } else {
        setErr(data.message);
      }
    } catch (error) {
      setErr("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <h2 className="text-center">User Login</h2>
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