// src/components/Misc/Icon/Icon.js

import React from 'react';
import './Icon.css';

const Icon = ({ name }) => {
  // Here you will render your SVG based on the 'name' prop
  // For now, just an example with placeholder content
  return (
    <svg className={`icon icon-${name}`} viewBox="0 0 24 24">
      {/* Placeholder SVG path, replace with your actual SVG paths based on 'name' */}
      <path d="M10,20 L14,20 L14,18 L10,18 L10,20 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z"></path>
    </svg>
  );
};

export default Icon;
