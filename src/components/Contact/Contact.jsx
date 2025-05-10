import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs
      .sendForm('service_786o03b', 'template_t7x61vu', form.current, {
        publicKey: 'xY1Ir0Y4xwnpZSGFh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='formulaire'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Titre</label>
        <input type="text" name="title" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    </div>
  );
};