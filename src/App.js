import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import './styles/App.scss';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

TimeAgo.addDefaultLocale(en);

const App = () => {

  return (

    <BrowserRouter>
      <Nav />
      <Switch>
        <Route
          path="/" exact
          render={(routerProps) => <HomePage {...routerProps} />} />
        <Route
          path="/video/:videoID"
          render={(routerProps) => <HomePage {...routerProps} />} />
        <Route
          path="/Upload"
          component={UploadPage} />
        <Route
          path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;