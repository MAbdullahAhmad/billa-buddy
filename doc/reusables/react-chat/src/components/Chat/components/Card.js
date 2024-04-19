// src/components/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Make sure to create a corresponding CSS file for styling

const Card = ({ imageUrl, heading, subHeading, actionLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={heading} className="card-image" />
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-subheading">{subHeading}</p>
        <a href={actionLink} target="_blank" rel="noopener noreferrer" className="card-action-link">Learn More</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  actionLink: PropTypes.string.isRequired,
};

export default Card;
