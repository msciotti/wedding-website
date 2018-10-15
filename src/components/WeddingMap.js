import React, {Component} from 'react';
import Map from '../components/Map';
import img from '../images/harborview-small.jpg';
import church from '../images/church-small.jpg';
import {renderToString} from 'react-dom/server';
import styles from '../components/App.css';

class Ceremony extends React.Component {
  render() {
    return (
      <div>
        <div style={{textAlign: 'left'}}>
          <h3>Ceremony</h3>
        </div>
        <div className={styles.flexContainerRow}>
          <div>
            <img className={styles.infoWindowImage} src={church} />
          </div>
          <div className={styles.infoWindowText}>
            St. Elizabeth's Church <br />
            86 Main St. <br />
            Edgartown, MA 02539 <br />
            3:00 p.m.
          </div>
        </div>
      </div>
    );
  }
}

class Hotel extends React.Component {
  render() {
    return (
      <div>
        <div style={{textAlign: 'left'}}>
          <h3>Reception</h3>
        </div>
        <div className={styles.flexContainerRow}>
          <div>
            <img className={styles.infoWindowImage} src={img} />
          </div>
          <div className={styles.infoWindowText}>
            Harbor View Hotel
            <br />
            131 N. Water St.
            <br />
            Edgartown, MA 02539
            <br />
            5:00 p.m.
            <br />
          </div>
        </div>
      </div>
    );
  }
}

class WeddingMap extends React.Component {
  render() {
    return (
      <Map
        id="ceremonyMap"
        options={{
          center: {lat: 41.3918558, lng: -70.5128039},
          zoom: 16,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
        }}
        onMapLoad={map => {
          const churchInfoWindow = new window.google.maps.InfoWindow({
            content: renderToString(<Ceremony />),
          });
          const churchMarker = new window.google.maps.Marker({
            position: {lat: 41.3901747, lng: -70.5151309},
            map: map,
            title: 'Church',
          });
          churchMarker.addListener('click', function() {
            churchInfoWindow.open(map, churchMarker);
          });
          window.google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
            churchInfoWindow.open(map, churchMarker);
          });

          const hotelInfoWindow = new window.google.maps.InfoWindow({
            content: renderToString(<Hotel />),
          });
          const hotelMarker = new window.google.maps.Marker({
            position: {lat: 41.3926459, lng: -70.5065813},
            map: map,
            title: 'Hotel',
          });
          hotelMarker.addListener('click', function() {
            hotelInfoWindow.open(map, hotelMarker);
          });
          window.google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
            hotelInfoWindow.open(map, hotelMarker);
          });
        }}
      />
    );
  }
}

export default WeddingMap;
