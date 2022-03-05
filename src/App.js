import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/App.scss';

import Nav from './components/Nav/Nav';

import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addDefaultLocale(en);

const App = () => {

  return (

    <BrowserRouter>

      <Nav />

      <Switch>

        <Route path="/" exact render={(routerProps) =>
          <HomePage
            {...routerProps}
          />
        } />
        <Route path="/UploadPage" component={UploadPage} />
        <Route path="/video/:videoID" render={(routerProps) =>
          <HomePage
            {...routerProps}
          />
        } />
      </Switch>
    </BrowserRouter>
  )
};


export default App;