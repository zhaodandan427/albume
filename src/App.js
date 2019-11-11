import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import PhotoBrowsing from './pages/photoBrowsing/photoBrowsing';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/photoBrowsing" component={PhotoBrowsing} />
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
