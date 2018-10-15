import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Wedding from './Wedding';
import Recommendations from './Recommendations';
import Registry from './Registry';
import GettingThere from './GettingThere';
import Accomodations from './Accomodations';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/the-weekend" component={Wedding} />
          <Route exact path="/the-island" component={Recommendations} />
          <Route path="/the-registry" component={Registry} />
          <Route exact path="/the-island/getting-there" component={GettingThere} />
          <Route exact path="/the-island/accomodations" component={Accomodations} />
        </Switch>
      </main>
    );
  }
}

export default Main;
