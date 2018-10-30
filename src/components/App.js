import React, {Component} from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import styles from '../components/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.page}>
          <Main />
        </div>
        {/* <div className={styles.footer}>
          <Footer />
        </div> */}
      </div>
    );
  }
}

export default App;
