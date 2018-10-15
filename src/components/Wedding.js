import React, {Component} from 'react';
import styles from '../components/App.css';
import img from '../images/harborview.jpg';
import LargeImage from '../components/LargeImage';

class Wedding extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LargeImage src={img} />
        <div className={styles.pageTextContainer}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31ZxjgNJ0hL._UY395_.jpg"
            style={{height: '250px', width: '250px'}}
          />
          <div>
            <h1>The Ceremony</h1>
            <p>3:00 p.m.</p>
            <p>St. Elizabeth's Church</p>
            <p>86 Main St.</p>
            <p>Edgartown, MA</p>
          </div>
        </div>
        <LargeImage src={img} />
        <div className={styles.pageTextContainer}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/31ZxjgNJ0hL._UY395_.jpg"
            style={{height: '250px', width: '250px'}}
          />
          <div>
            <h1>The Reception</h1>
            <p>5:00 p.m.</p>
            <p>Harbor View Hotel</p>
            <p>131 N. Water St.</p>
            <p>Edgartown, MA</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Wedding;
