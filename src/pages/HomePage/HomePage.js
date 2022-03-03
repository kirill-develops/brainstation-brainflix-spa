import { Component } from 'react'
import videos from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';


import Media from '../../components/Media/Media';
import MediaHighlights from '../../components/MediaHighlights/MediaHighlights';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import NextVideo from '../../components/NextVideo/NextVideo';

class HomePage extends Component {
  state = {
    activeVideoId: null,
    videoArray: videos
  }

  handleVideoChange = (videoId) => {
    this.setState({
      activeVideoId: videoId
    })
  }

  componentDidMount(prevProps, prevState) {
    // console.log(this.props.match.params.videoID) 
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.match.params.videoID) {
      this.setState(videos[0])
    }
    if (prevProps.match.params.videoID !== this.props.match.params.videoID) {
      this.setState(this.props.match.params.videoID)
    }
  }

  

  render() {

    const videoID = this.state.videoArray
      .find((video) => video.id === this.state.activeVideoId)
      .id;

    const videoObj = videoDetails.find(video => video.id === videoID);
    const { poster, comments } = videoObj

    const filteredVideos = this.state.videoArray.filter((video) => video.id !== videoObj.id);


    return (
      <div className='App'>
        <Media poster={poster} />

        <div className='main--desktop'>

          <div className="main__left--desktop">

            <MediaHighlights
              videoObj={videoObj}
            />
            <CommentInput
              commentSum={comments.length}
            />
            <CommentList
              commentsArr={comments}
            />
          </div>

          <NextVideo
            vidArr={filteredVideos}
            handleVideoChange={this.handleVideoChange}
          />
        </div>
      </div>
    )
  }
}

export default HomePage