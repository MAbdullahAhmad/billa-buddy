// src/layouts/StaticLayout/local/Header/Nav/Nav.js

import React from 'react';
import './Nav.css';

import Switch from '../../../../../components/Form/Switch/Switch';
import Icon from '../../../../../components/Misc/Icon/Icon';
import AutoLink from '../../../../../components/Misc/AutoLink';

import static_routes from '../../../../../pages/static/routes';
import member_routes from '../../../../../pages/member/routes';


// Add 'nav-link' class to AutoLink
const Link = ({className, ...rest}) => <AutoLink className={`${className} nav-link`} {...rest}/> ;

function Nav({ toggle_theme }){

  return (
    <nav className="header-nav">
      <ul className="nav-links">
        <li><Switch toggle={toggle_theme} colorOne='#000' colorTwo='#fff'/></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/member/chat">Chat</Link></li>
        <li>
          <div className="account-dropdown">
            <Link href="#account-dropdown" id="account-dropdown">
              Account <Icon name="down-arrow" />
              <div className="dropdown-content">
                <button>Login</button>
                <button>Register</button>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
