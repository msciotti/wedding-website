import React, {Component} from 'react';
import LargeImage from './LargeImage';
import grass from '../images/seagrass.jpg';
import seagull from '../images/seagull.jpg';
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
          <HotelItem image={REGISTRIES.WILLIAM_SONOMA.IMAGE} link={REGISTRIES.WILLIAM_SONOMA.LINK} />
          <HotelItem image={REGISTRIES.POTTERY_BARN.IMAGE} link={REGISTRIES.POTTERY_BARN.LINK} />
          <HotelItem image={REGISTRIES.CRATE_AND_BARREL.IMAGE} link={REGISTRIES.CRATE_AND_BARREL.LINK} />
        </div>
        <LargeImage src={seagull} />
      </div>
    );
  }
}

export default Registry;
