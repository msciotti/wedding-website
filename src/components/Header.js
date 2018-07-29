import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">Home</Link> -
          <Link to="/wedding"> Wedding</Link> -
          <Link to="/accomodations"> Accomodations</Link> -
          <Link to="/recommendations"> Recommendations</Link> -
          <Link to="/registry"> Registry</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
