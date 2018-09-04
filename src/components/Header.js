import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from '../components/Header.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.container}>
        <div>
          <div className={styles.nameText}>Makayla & Mason</div>
        </div>
        <div>
          <nav>
            <Link to="/" style={{textDecoration: 'none'}}>
              Home
            </Link>{' '}
            -
            <Link to="/wedding" style={{textDecoration: 'none'}}>
              {' '}
              Wedding
            </Link>{' '}
            -
            <Link to="/accomodations" style={{textDecoration: 'none'}}>
              {' '}
              Accomodations
            </Link>{' '}
            -
            <Link to="/recommendations" style={{textDecoration: 'none'}}>
              {' '}
              Recommendations
            </Link>{' '}
            -
            <Link to="/registry" style={{textDecoration: 'none'}}>
              {' '}
              Registry
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
