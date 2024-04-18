// src/components/Form/Switch/Switch.js

import { useState } from 'react';
import './Switch.css';

const Switch = ({ toggle, colorOne, colorTwo }) => {
  const [isOn, setOn] = useState(true);

  const handleToggle = e => {
    // e.preventDefault();
    setOn(!isOn);
    toggle();
  };

  return (
    <>
      <input checked={isOn} onChange={handleToggle} className="switch-checkbox" id={`switch`} type="checkbox" />
      <label style={{ background: isOn ? colorOne : colorTwo }} className="switch-label" htmlFor={`switch`} >
        <span className={`switch-button`} style={{ background: isOn ? colorTwo : colorOne  }} />
      </label>
    </>
  );
};

export default Switch;
