import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import PageError from './components/404Page';

import Cats from './components/Cat';
import Sunset from './components/Sunsets';
import Dogs from './components/Dogs';
import Home from './components/Home';

// import PhotoContainer from './components/PhotoContainer';
class App extends React.Component {

  render() {
    return ( 
      <BrowserRouter>
          <Switch>
            <Route exact path = '/:query?' render={() => <Home />} />
            <Route path = '/cats/:query?' render={() => <Cats />} />
            <Route path = '/dogs/:query?' render={() => <Dogs />} />
            <Route path = '/sunsets/:query?' render={() => <Sunset />} />  
            <Route component={PageError} />
          </Switch>
      </BrowserRouter>
      );
  }
}

export default App;