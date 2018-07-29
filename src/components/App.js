import React, {Component} from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
