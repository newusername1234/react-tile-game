import React from 'react';
import Game from './components/Game';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game/1" component={Game} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;