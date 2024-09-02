import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          setFormData({ firstname: '', lastname: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
          alert('Failed to send message. Please try again later.');
        },
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />

        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
