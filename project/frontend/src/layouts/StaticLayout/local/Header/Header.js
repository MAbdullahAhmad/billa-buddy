// src/layouts/StaticLayout/local/Header/Header.js

import React from 'react';
import './Header.css';

import Nav from './Nav/Nav';

function Header({ toggle_theme }) {
  return (
    <header className="static-header">
      <div className="header-content">
        <h1 className="logo">Billa-Buddy</h1>
        <Nav toggle_theme={toggle_theme}/>
      </div>
    </header>
  );
};

export default Header;
