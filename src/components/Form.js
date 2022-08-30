import "./FormStyles.css";
import emailjs from "emailjs-com";
import React, { useRef } from "react";

const Form = () => {
    /*useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. 
    If you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes.*/
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault() /*Prevents page from reloading once email is sent*/;
    emailjs
      .sendForm(
        "service_wovwx47",
        "template_fjuaifc",
        form.current,
        "9EFMMNwkoGjGFwC1p"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset(); /*clears form once sent*/
  };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" required></input>
            <label>Email</label>
            <input type="email" name="user_email" required></input>
            <label>Subject</label>
            <input type="text" name="message" required></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form