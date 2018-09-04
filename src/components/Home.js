import React, {Component} from 'react';
import img from '../images/home.jpg';
import styles from '../components/App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={img} alt="Makayla and Mason" className={styles.centerImage} />
        </div>
        <div className={styles.background}>
          <div>
            Come celebrate our wedding! Makayla Rae Humphrey & Mason Alexander Sciotti Welcome! We are so excited for
            you to share in our special day together. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt pharetra odio sed tincidunt. Phasellus sagittis aliquam faucibus. Quisque molestie feugiat
            eleifend. Integer ut lectus tempor, suscipit mauris ut, consequat risus. Duis bibendum, dui vitae auctor
            iaculis, purus massa efficitur mauris, sodales egestas nulla ipsum a ipsum. Etiam eu posuere massa. Sed nec
            massa quis neque scelerisque laoreet. Praesent non dui interdum, sollicitudin nunc nec, convallis massa.
            Cras dignissim consectetur tellus ac elementum. ec. Nus ut nulla sed venenatis. Suspendisse velit urna,
            tincidunt ac viverra quis, vulputate non ante. Nam convallis ligula eu aliquet suscipit. Sed egestas elit ut
            ullamcorper sodales. Fusce tempor mi sit amet cursus laoreet. Quisque sit amet semper nulla, ac euismod
            sapien. Cras quis lacus nec tellus suscipit porttitor. Donec posuere viverra tellus. Donec at nibh tempus,
            porttitor ex a, aliquam mi. Nulla non tortor tincidunt, suscipit metus quis, rutrum lacus. Nulla a elit
            congue, pellentesque est ac, interdum ipsum.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
