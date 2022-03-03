import { Component } from 'react'
import axios from 'axios';


import Media from '../../components/Media/Media';
import MediaHighlights from '../../components/MediaHighlights/MediaHighlights';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import NextVideo from '../../components/NextVideo/NextVideo';
// import apiUtils from '../../utils/apiUtils';

class HomePage extends Component {
  state = {
    videoArray: [],
    activeVideoObj: null
  }

  componentDidMount() {
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=ff9c2a43-3766-47e2-a1f6-cc47352e52a0`)
      .then(response => {
        this.setState({
          videoArray: response.data,
        })
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.videoArray[0].id}?api_key=ff9c2a43-3766-47e2-a1f6-cc47352e52a0`)
          .then(response => {
            this.setState({
              activeVideoObj: response.data,
            })
          })

      })
  }

  componentDidUpdate(prevProps) {

    const { videoID: currentID } = this.props.match.params
    const { videoID: prevID } = prevProps.match.params

    if (!currentID && prevID) {
      axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.videoArray[0].id}?api_key=ff9c2a43-3766-47e2-a1f6-cc47352e52a0`)
        .then(response => {
          this.setState({
            activeVideoObj: response.data,
          })
        })
    } else if (prevID !== currentID) {
      axios.get(`https://project-2-api.herokuapp.com/videos/${currentID}?api_key=ff9c2a43-3766-47e2-a1f6-cc47352e52a0`)
        .then(response => {
          this.setState({
            activeVideoObj: response.data,
          })
        })
    }
  }

  render() {

    if (!this.state.activeVideoObj) {
      return <p>Loading...</p>
    }

    const { image, comments, video, id } = this.state.activeVideoObj
    const { activeVideoObj } = this.state
    const filteredVideos = this.state.videoArray.filter((video) => video.id !== id);

    return (
      <div className='App'>
        <Media poster={image} video={video} id={id} />

        <div className='main--desktop'>

          <div className="main__left--desktop">

            <MediaHighlights
              videoObj={activeVideoObj}
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
          />
        </div>
      </div>
    )
  }
}

export default HomePage