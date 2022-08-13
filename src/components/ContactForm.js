import './styles/ContactForm.css';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    let isEmpty = false;

    [...e.target].forEach((element) => {
      if (element.value === '') {
        isEmpty = true;
        element.classList.add('invalid');
        element.oninput = () => {
          element.classList.remove('invalid');
          element.oninput = null;
        };
      }
    });

    if (isEmpty) {
      // display error
    }

    if (!isEmpty) {
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
    }
  };

  const formElement = (
    <form ref={form} onSubmit={sendEmail}>
      <label>
        Name*
        {/* Cannot be empty */}
        <input type="text" name="user_name" />
      </label>

      <label>
        Email*
        {/* Email Validation */}
        <input type="email" name="user_email" />
      </label>

      <label>
        Message*
        {/* Cannot be empty */}
        <textarea name="message" />
      </label>

      <input type="submit" value="Send" />
    </form>
  );

  return <div>{messageSent ? null : formElement}</div>;
};
