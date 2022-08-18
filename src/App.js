import React from "react";
import "./App.css";

export default function App() {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = React.useState(false);

  const [valid, setValid] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  function handleChange(e, val) {
    setValues({ ...values, [val]: e.target.value });
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          onChange={(e) => handleChange(e, "firstName")}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
        />
        {submitted && !values.firstName ? (
          <span className="error">Please enter a first name</span>
        ) : null}
        <input
          onChange={(e) => handleChange(e, "lastName")}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
        />
        {submitted && !values.lastName ? (
          <span className="error">Please enter a last name</span>
        ) : null}
        <input
          onChange={(e) => handleChange(e, "email")}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
        />
        {submitted && !values.email ? (
          <span className="error">Please enter an email address</span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
