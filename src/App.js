import React from 'react';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import { getRandomElement } from './script/getRandomElement'
import './styles/App.scss';

import Nav from './components/Nav/Nav';
import Media from './components/Media/Media';
import MediaDetails from './components/MediaDetails/MediaDetails';
import CommentInput from './components/CommentInput/CommentInput';
import CommentList from './components/CommentList/CommentList';
import NextVideo from './components/NextVideo/NextVideo';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

class App extends React.Component {
  state = {
    activeVideo: getRandomElement(videoDetails)
  }

  handleVideoChange = (video) => {
    this.setState({
      activeVideo: video
    })
  }

  render() {
    TimeAgo.addDefaultLocale(en);
    console.log(this.state.activeVideo);

    const filteredVideos = videos.filter((video) => video.id !== this.state.activeVideo.id);
    const { image } = this.state.activeVideo;

    const { timestamp, title, channel, views, likes, description } = this.state.activeVideo;
    return (
      <div className="App">
        <Nav />
        <Media video = {image} />
        <MediaDetails
          data={this.state.activeVideo}
          timestamp = {timestamp}
          title = {title}
          channel = {channel}
          views = {views}
          likes = {likes}
          description = {description}
        />
        <CommentInput data={this.state.activeVideo}></CommentInput>
        <CommentList data={this.state.activeVideo}></CommentList>
        <NextVideo vidArr={filteredVideos}></NextVideo>
      </div>
    )
  };
};

export default App;