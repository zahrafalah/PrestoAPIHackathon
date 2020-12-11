import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import { register } from "../api/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match", "danger");
    } else {
      // register({ email, password });
    }
  };

  return (
    <form className="form authForm" onSubmit={(e) => onSubmit(e)}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
          className="form-control"
          placeholder="Enter confirm-password"
        />
      </div>

      <button type="submit" className="btn btn-success btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to={"/sign-in"}>sign in?</Link>
      </p>
    </form>
  );
};
export default SignUp;
