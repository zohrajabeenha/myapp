import React, { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const { email, password } = auth;
  const formhander = (e) => {
    e.preventDefault();
    console.log(auth);
    setAuth({
      email: "",
      password: "",
    });
    toast.success("user login successfully");
    // to prevent page reload on form submission.
  };
  return (
    <div className="container">
      <h1 className="text-center ">Login Screen</h1>
      <form onSubmit={formhander}>
        <div className="text-center m-auto rounded shadow w-25 p-3 bg-dark">
          <div className="p-3">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              value={email}
              onChange={(e) => setAuth({ ...auth, email: e.target.value })}
              className="form-control"
            />
          </div>
          <div className="p-3">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              required
              value={password}
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-info">
            button
          </button>

          <a href="#" className="text-white p-3">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
