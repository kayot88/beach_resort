import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isVisible: false
  };
  handleToogle = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-center">
          <div className="navbar-header">
            <Link to="/">
              <img src={logo} alt="Beach resort" />
            </Link>
            <button className="navbar-btn">
              <FaAlignRight onClick={this.handleToogle} />
            </button>
          </div>
          <ul
            className={
              this.state.isVisible ? 'navbar-links show-nav' : 'navbar-links'
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
