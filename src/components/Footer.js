import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from '../components/App.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.footerContainer}>
        <Link to="/" style={{textDecoration: 'none'}}>
          The Story
        </Link>
        <Link to="/the-weekend" style={{textDecoration: 'none'}}>
          The Weekend
        </Link>
        <Link to="/the-island" style={{textDecoration: 'none'}}>
          The Island
        </Link>{' '}
        <Link to="/the-registry" style={{textDecoration: 'none'}}>
          The Registry
        </Link>
      </div>
    );
  }
}

export default Header;
