import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Wedding from './Wedding';
import Accomodations from './Accomodations';
import Recommendations from './Recommendations';
import Registry from './Registry';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wedding" component={Wedding} />
          <Route path="/accomodations" component={Accomodations} />
          <Route path="/recommendations" component={Recommendations} />
          <Route path="/registry" component={Registry} />
        </Switch>
      </main>
    );
  }
}

export default Main;
