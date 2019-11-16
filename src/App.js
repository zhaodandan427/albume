import React from 'react';
import './App.css';
import { Route, HashRouter, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import PhotoBrowsing from './pages/photoBrowsing/photoBrowsing';
import CreateAlbum from './pages/createAlbum/createAlbum';
import Help from './pages/help/help';
import GarbageBasket from './pages/garbageBasket/garbageBasket';
import UploadAlbum from './pages/uploadAlbum/uploadAlbum';
import ManagePhotos from './pages/managePhotos/managePhotos';
import MoreAlbum from './pages/moreAlbum/moreAlbum';
import Comment from './pages/photoBrowsing/comment/comment';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photoBrowsing/:id" component={PhotoBrowsing} />
          <Route path="/comment/:id" component={Comment} />
          <Route path="/createAlbum" component={CreateAlbum} />
          <Route path="/help" component={Help} />
          <Route path="/garbageBasket" component={GarbageBasket} />
          <Route path="/uploadAlbum" component={UploadAlbum} />
          <Route path="/managePhotos" component={ManagePhotos} />
          <Route path="/moreAlbum/:id" component={MoreAlbum} />

        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
