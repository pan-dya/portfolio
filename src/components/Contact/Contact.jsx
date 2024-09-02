import React from 'react';
import './Contact.css';
import ContactCard from './ContactCard/ContactCard';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactCard
            iconUrl={'/portfolio/assets/images/email.svg'}
            text={'pandya.limawan@gmail.com'}
          />
          <ContactCard
            iconUrl={'/portfolio/assets/images/github.jpg'}
            text={'https://github.com/pan-dya'}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
