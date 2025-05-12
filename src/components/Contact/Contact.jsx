import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css';
import { Send, Loader2} from 'lucide-react';
import PresentationTitle from '../Presentation/PresentationTitle';
import { useLanguage } from '../../contexts/LanguageContext';
export const Contact = () => {
  const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;

    const [loading, setLoading] = useState(false);
  const form = useRef();
  const textareaRef = useRef();
  const [textareaHeight, setTextareaHeight] = useState('auto');

  const handleTextareaChange = () => {
    setTextareaHeight(textareaRef.current.scrollHeight + 'px');
  };

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm('service_786o03b', 'template_t7x61vu', form.current, {
        publicKey: 'xY1Ir0Y4xwnpZSGFh',
      })
      .then(() => {
        console.log('SUCCESS!');
        form.current.reset();
        setTextareaHeight('auto');
        setLoading(false);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <div className='formulaire'>
        <div className='title-container'>
            <PresentationTitle text={translations.contactTitle}/>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <div className='champ'>
                <label>{translations.contactName}</label>
                <input type='text' name='user_name' />
            </div>
            <div className='champ'>
                <label>{translations.mail}</label>
                <input type='email' name='user_email' />
            </div>
            <div className='champ'>
                <label>{translations.contactObject}</label>
                <input type='text' name='title' />
            </div>
            <div className='champ textarea-container' style={{ height: textareaHeight }}>
                <label>{translations.contactMessage}</label>
                <textarea
                  name='message'
                  ref={textareaRef}
                  style={{ height: textareaHeight }}
                  onChange={handleTextareaChange}
                />
            </div>
            {loading ? <div className='loading'>
            <div className='loader'>
                <Loader2 />
            </div>
        </div> :
            <button type='submit' className='submit-button'>
              {translations.contactSend}<Send size={20} style={{ marginLeft: '8px' }} />
            </button>}
        </form>
    </div>
  );
};
