import React from 'react';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import './styles/App.scss';

import Nav from './components/Nav/Nav';
import Media from './components/Media/Media';
import MediaDetails from './components/MediaDetails/MediaDetails';
import CommentInput from './components/CommentInput/CommentInput';
import CommentList from './components/CommentList/CommentList';
import NextVideo from './components/NextVideo/NextVideo';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addDefaultLocale(en);

class App extends React.Component {
  state = {
    videos: videos,
    videoDetails: videoDetails
  }
  
  render() {
    console.log(videoDetails);
    return (
      <div className="App">
        <Nav />
        <Media data={this.state.videos[0]} />
        <MediaDetails data={this.state.videoDetails[0]}></MediaDetails>
        <CommentInput data={this.state.videoDetails[0]}></CommentInput>
        <CommentList data={this.state.videoDetails[0]}></CommentList>
        <NextVideo vidArr={this.state.videoDetails}></NextVideo>
      </div>
    )
  };
};

export default App;