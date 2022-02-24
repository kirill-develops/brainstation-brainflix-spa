import React from 'react';
import videos from './data/videos.json'
import videoDetails from './data/video-details.json'
import './styles/App.scss';

import Nav from './components/Nav/Nav';
import Media from './components/Media/Media';
import Details from './components/Details/Details'
import CommentInput from './components/CommentInput/CommentInput';
import CommentList from './components/CommentList/CommentList';


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
        <Details data={this.state.videoDetails[0]}></Details>
        <CommentInput data={this.state.videoDetails[0]}></CommentInput>
        <CommentList data={this.state.videoDetails[0]}></CommentList>

      </div>
    )
  };
};

export default App;