import React, {Component} from 'react';
import img from '../images/harborview.jpg';
import chairs from '../images/deckchairs.jpg';
import lighthouse from '../images/lighthousenight.jpg';
import boats from '../images/boats.jpg';
import styles from '../components/App.css';
import LargeImage from './LargeImage';
import HotelItem from './HotelItem';
import {ACOMMODATIONS} from './Constants';

class Accomodations extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LargeImage src={lighthouse} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>Accomodations</h1>
          <p>{ACOMMODATIONS.INTRO1}</p>
          <p>{ACOMMODATIONS.INTRO2}</p>
        </div>
        <LargeImage src={boats} alt="Harborview Hotel" />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>{ACOMMODATIONS.RENTAL_HOMES.HEADER}</h1>
          <p>{ACOMMODATIONS.RENTAL_HOMES.BODY}</p>
          <div className={styles.hotelGridContainer}>
            <HotelItem image={ACOMMODATIONS.RENTAL_HOMES.AIRBNB.IMAGE} link={ACOMMODATIONS.RENTAL_HOMES.AIRBNB.LINK} />
            <HotelItem image={ACOMMODATIONS.RENTAL_HOMES.VRBO.IMAGE} link={ACOMMODATIONS.RENTAL_HOMES.VRBO.LINK} />
            <HotelItem
              image={ACOMMODATIONS.RENTAL_HOMES.HOMEAWAY.IMAGE}
              link={ACOMMODATIONS.RENTAL_HOMES.HOMEAWAY.LINK}
            />
          </div>
        </div>
        <LargeImage src={chairs} />
        <div className={styles.pageTextContainer}>
          <h1 className={styles.fancyText}>Hotels</h1>
          <p>{ACOMMODATIONS.HOTEL_BODY}</p>
          <div>
            <div className={styles.hotelGridContainer}>
              {Object.keys(ACOMMODATIONS.HOTELS)
                .slice(0, 3)
                .map(hotel => {
                  return (
                    <HotelItem
                      key={ACOMMODATIONS.HOTELS[hotel].NAME}
                      image={ACOMMODATIONS.HOTELS[hotel].IMAGE}
                      name={ACOMMODATIONS.HOTELS[hotel].NAME}
                      description={ACOMMODATIONS.HOTELS[hotel].DESCRIPTION}
                      phone={ACOMMODATIONS.HOTELS[hotel].PHONE}
                      price={ACOMMODATIONS.HOTELS[hotel].PRICE}
                      link={ACOMMODATIONS.HOTELS[hotel].LINK}
                    />
                  );
                })}
            </div>
            <div className={styles.hotelGridContainer}>
              {Object.keys(ACOMMODATIONS.HOTELS)
                .slice(3, 6)
                .map(hotel => {
                  return (
                    <HotelItem
                      key={ACOMMODATIONS.HOTELS[hotel].NAME}
                      image={ACOMMODATIONS.HOTELS[hotel].IMAGE}
                      name={ACOMMODATIONS.HOTELS[hotel].NAME}
                      description={ACOMMODATIONS.HOTELS[hotel].DESCRIPTION}
                      phone={ACOMMODATIONS.HOTELS[hotel].PHONE}
                      price={ACOMMODATIONS.HOTELS[hotel].PRICE}
                      link={ACOMMODATIONS.HOTELS[hotel].LINK}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accomodations;
