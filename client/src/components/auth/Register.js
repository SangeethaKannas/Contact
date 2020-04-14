import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const { formData, updateFormData } = useState({
    name: "",
    email: "",
    password: "",
    confirmpwd: "",
  });

  const { name, email, password, confirmpwd } = formData;

  const onChange = (e) =>
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpwd) {
      console.log("Passwords not matching");
    } else {
      console.log(formData);
    }
  };

  return (
    <div>
      <h1 className="large test-primary">Register</h1>
      <p className="cta">
        <i className="fas fa-address-card"></i>Specify your account info
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpwd"
            value={confirmpwd}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
      </form>
      <p className="m">
          Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Register;
