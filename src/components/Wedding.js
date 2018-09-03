import React, {Component} from 'react';
import styles from '../components/App.css';

class Wedding extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div>
          <p>
            Our Wedding will be held on October 5, 2019 at St. Elizabeth's in Edgartown, MA. Martha's Vineyard has
            always been a special place for us together. It's where Makayla grew up during the summers, and a place
            Mason would join and love as well, though he's not nearly as much of a beach bum!
          </p>
        </div>
        <div>
          <p>
            <b>CEREMONY</b>
            3:00 p.m. St. Elizabeth's Catholic Church 86 Main St. Edgartown, MA 02539
          </p>
        </div>
        <div>
          <p>
            <b>RECEPTION</b>
            5:00 p.m. Harbow View Hotel 131 N Water St. Edgartown, MA 02539
          </p>
        </div>
      </div>
    );
  }
}

export default Wedding;
