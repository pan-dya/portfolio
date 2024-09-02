import React from 'react';
import './ContactCard.css';
import PropTypes from 'prop-types';

const ContactCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

ContactCard.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactCard;
