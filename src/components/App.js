import React, {Component} from 'react';
import styles from './App.css';
import Main from './Main';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className={styles.outerPage}>
        <Header />
        <div className={styles.App}>
          <header className={styles.appHeader} />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
