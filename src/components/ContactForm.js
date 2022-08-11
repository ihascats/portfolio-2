import './styles/ContactForm.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'portfolioMail',
        'portfolio-mail',
        form.current,
        'qdIXJz00rQL7gvLCY',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>
        Name
        <input type="text" name="user_name" />
      </label>

      <label>
        Email
        <input type="email" name="user_email" />
      </label>

      <label>
        Message
        <textarea name="message" />
      </label>

      <input type="submit" value="Send" />
    </form>
  );
};
