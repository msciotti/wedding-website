import React, {Component} from 'react';
import styles from '../components/App.css';
import lighthouse from '../images/lighthouse.jpg';
import flower from '../images/pinkflower.jpg';
import whale from '../images/whale.png';
import LargeImage from '../components/LargeImage';

class Wedding extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LargeImage src={lighthouse} />
        <div className={styles.pageTextContainer}>
          <div className={styles.flexboxRowContainer}>
            <div className={styles.centerText}>
              <h1 className={styles.fancyText}>The Ceremony</h1>
              <p>3:00 p.m.</p>
              <p>St. Elizabeth's Church</p>
              <p>86 Main St.</p>
              <p>Edgartown, MA</p>
            </div>
            <img src={whale} className={styles.smallImage} />
            <div className={styles.centerText}>
              <h1 className={styles.fancyText}>The Reception</h1>
              <p>5:00 p.m.</p>
              <p>Harbor View Hotel</p>
              <p>131 N. Water St.</p>
              <p>Edgartown, MA</p>
            </div>
          </div>
        </div>
        <LargeImage src={flower} />
      </div>
    );
  }
}

export default Wedding;
