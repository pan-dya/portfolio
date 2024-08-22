import React from 'react';
import PropTypes from 'prop-types';
import './SkillCard.css';

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img className="svg-icon" src={iconUrl} alt={title}></img>
      </div>
      <span>{title}</span>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SkillCard;
