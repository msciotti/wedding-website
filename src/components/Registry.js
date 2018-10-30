import React, {Component} from 'react';
import LargeImage from './LargeImage';
import grass from '../images/seagrass.jpg';
import night from '../images/night.jpg';
import styles from './App.css';
import {REGISTRIES} from './Constants';
import HotelItem from './HotelItem';

class Registry extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LargeImage src={grass} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>Registry</h1>
          <p>
            We are registered at Williams Sonoma, Pottery Barn, and Crate & Barrel. Check out the links below to see
            what's on our wish list!
          </p>
          <div className={styles.hotelGridContainer}>
            <HotelItem bText="Visit William Sonoma" link={REGISTRIES.WILLIAM_SONOMA.LINK} />
            <HotelItem bText="Visit Pottery Barn" link={REGISTRIES.POTTERY_BARN.LINK} />
            <HotelItem bText="Visit Crate & Barrel" link={REGISTRIES.CRATE_AND_BARREL.LINK} />
          </div>
        </div>
        <LargeImage src={night} />
      </div>
    );
  }
}

export default Registry;
