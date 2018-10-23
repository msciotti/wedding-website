import React, {Component} from 'react';
import beach from '../images/home.jpg';
import proposal from '../images/proposal.JPG';
import styles from '../components/App.css';
import LargeImage from '../components/LargeImage';

class Home extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LargeImage src={beach} alt="Makayla and Mason" />
        <div className={styles.pageTextContainer}>
          <div className={styles.centerText}>
            <h1 className={styles.fancyText}>Celebrate with us!</h1>
            <p>Saturday, October 5, 2019</p>
            <p>Martha's Vineyard, MA</p>
            <p>Makayla Rae Humphrey</p>
            <p className={styles.fancyText}> - and - </p>
            <p>Mason Alexander Sciotti</p>
          </div>
        </div>
        <LargeImage src={proposal} />
      </div>
    );
  }
}

export default Home;
