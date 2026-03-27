import React, { useState } from "react";
import "../styles/signup.css";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(password);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!validateEmail(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!validatePassword(form.password)) {
      newErrors.password =
        "Password must be 6+ chars, include number & special char";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Signup Successful ✅");
      console.log(form);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p className="error">{errors.confirmPassword}</p>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;