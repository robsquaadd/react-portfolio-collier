import React, { useState } from "react";
import { validateEmail } from "../utils/helpers.js";

function Contact() {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  function formValueChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormErrorMessage("Your email is invalid!");
      } else {
        setFormErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setFormErrorMessage(`${e.target.name} is required`);
      } else {
        setFormErrorMessage("");
      }
    }
    if (!formErrorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function submitButtonHandler(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <div id="contact-form-container">
      <form id="contact-form">
        <div id="contact-form-content-container">
          <h1>contact me!</h1>
          <label htmlFor="name">name: </label>
          <input
            id="name"
            name="name"
            placeholder="name"
            onBlur={formValueChange}
          />
          <label htmlFor="email" onBlur={formValueChange}>
            email:{" "}
          </label>
          <input
            id="email"
            name="email"
            placeholder="email"
            onBlur={formValueChange}
          />
          <label htmlFor="message">message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="enter message here"
            onBlur={formValueChange}
          ></textarea>
          {formErrorMessage && <p>Error: {formErrorMessage}</p>}
          <button
            type="submit"
            className="submit-btn"
            onClick={submitButtonHandler}
          >
            contact me!
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
