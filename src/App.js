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
TimeAgo.addDefaultLocale(en);

class App extends React.Component {
  state = {
    activeVideoId: getRandomElement(videoDetails).id
  }

  handleVideoChange = (video) => {
    this.setState({
      activeVideoId: video
    })
  }

  render() {
    // const activeVideoObj = videoDetails.find((video) => video.id === this.state.activeVideoId);
    const {
      timestamp,
      title,
      channel,
      views,
      likes,
      description,
      image,
      id,
      comments: activeComments
    } = videoDetails.find((video) => video.id === this.state.activeVideoId);

    const filteredVideos = videos.filter((video) => video.id !== id);

    return (
      <div className="App">
        <Nav />
        <Media
          poster={image}
        />
        <div className='main--desktop'>

          <div className="main__left--desktop">
            <MediaDetails
              timestamp={timestamp}
              title={title}
              channel={channel}
              views={views}
              likes={likes}
              description={description}
            />
            <CommentInput
              commentSum={activeComments.length}
            />
            <CommentList
              commentsArr={activeComments}
            />
          </div>

          <NextVideo
            vidArr={filteredVideos}
            handleVideoChange={this.handleVideoChange}
          />
        </div>
      </div>
    )
  };
};

export default App;