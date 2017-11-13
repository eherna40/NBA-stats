// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Assets
import logo from './images/logo.svg'
import './css/Header.css';


class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-content">
          <div className="Logo">
            <img src={logo} alt="Logo NBA Stats" />
          </div>
          <Link to='/' className="Title">NBA Stats</Link>
        </div>
      </div>
    );
  }
}

export default Header;
