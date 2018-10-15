import React, {Component} from 'react';
import styles from '../components/App.css';

class LargeImage extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} className={styles.centerImage} alt={this.props.alt} />
      </div>
    );
  }
}

export default LargeImage;
