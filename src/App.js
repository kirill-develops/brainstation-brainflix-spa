import React from 'react';
import videos from './data/videos.json'
import videoDetails from './data/video-details.json'
import './styles/App.scss';

import Nav from './components/Nav/Nav';
import Media from './components/Media/Media';
import Details from './components/Details/Details'


class App extends React.Component {

  render() {
    console.log(videoDetails);
    return (
      <div className="App">
        <Nav />
        <Media data={videos[0]} />
        <Details data={videoDetails[0]}></Details>

      </div>
    )
  };
};

export default App;