import { Component } from 'react'
import apiUtils from '../../utils/apiUtils';

import VideoBlock from '../../components/VideoBlock/VideoBlock';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import NextVideo from '../../components/NextVideo/NextVideo';
import ErrorPage from '../ErrorPage/ErrorPage'

class HomePage extends Component {

  state = {
    videoArray: [],
    activeVideoObj: null,
    error: false,
    likedVids: []
  }

  componentDidMount() {
    const errorMessage = < p > Error fetching data, please try reloading in a few moments</p >

    apiUtils.getAll()
      .then(res => {

        // create Arr with [0]=vidId & [1]=<isLiked t/f>
        const likedVids = res.data.map(vid => { return { 'id': vid.id, 'liked': false } })
        this.setState({ videoArray: res.data, likedVids: likedVids });
        const videoId = this.props.match.params.videoID || this.state.videoArray[0].id;
        const { videoID } = this.props.match.params;

        if (videoID && !this.state.videoArray.find(vid => vid.id === videoID)) {
          this.setState({ error: true });
          return;
        }

        apiUtils.getVideoById(videoId)
          .then(res => {
            this.setState({ activeVideoObj: res.data })
              .catch(() => { return errorMessage })
          }).catch(() => { return errorMessage })
      })
  }

  componentDidUpdate(prevProps) {
    const { videoID: currentID } = this.props.match.params
    const { videoID: prevID } = prevProps.match.params
    // if ID's don't match, updates state of activeVideObj, if no ID but previously had a value, go to first video
    if (!currentID && prevID) {
      apiUtils.getVideoById(this.state.videoArray[0].id)
        .then(response => {
          this.setState({
            activeVideoObj: response.data,
            error: false
          })
        })
        .catch(err => {
          console.log(err);
          <h2>Please Refresh the screen</h2>
        })
    } else if (prevID !== currentID) {
      apiUtils.getVideoById(currentID)
        .then(response => {
          this.setState({
            activeVideoObj: response.data,
          })
        })
        .catch(err => {
          console.log(err);
          < h2 > Please Refresh the screen</h2 >
        })
    }
  }

  updateActiveVideoObj = (vidObj) => {
    this.setState({
      activeVideoObj: vidObj
    })
  }

  updateLike = (videoId) => {

    const { id, liked } = this.state.likedVids.find(vid => vid.id === videoId);
    const likedIndex = this.state.likedVids.findIndex(vid => vid.id === videoId);

    apiUtils.likeVideo(id, liked)
      .then(res => {

        const updateLikes = this.state.likedVids;
        updateLikes[likedIndex].liked = res.data[0];

        this.updateActiveVideoObj(res.data[1])
      })
  }

  render() {

    if (!this.state.activeVideoObj && !this.state.error) {
      return <p>Loading...</p>
    }
    else if (this.state.error) {
      return <ErrorPage />
    }

    const { image, comments, video, id } = this.state.activeVideoObj
    const { activeVideoObj } = this.state
    const filteredVideos = this.state.videoArray.filter((video) => video.id !== id);
    const liked = this.state.likedVids.find(vid => vid.id === id).liked;
    return (
      <div className='App'>
        <VideoBlock poster={image} video={video} id={id} />
        <div className='main--desktop'>
          <div className="main__left--desktop">
            <VideoInfo
              videoObj={activeVideoObj}
              updateLike={this.updateLike}
              liked={liked}
            />
            <CommentInput
              commentSum={comments.length}
              videoId={id}
              updateActiveVideoObj={this.updateActiveVideoObj}
            />
            <CommentList
              commentsArr={comments}
              videoId={id}
              updateActiveVideoObj={this.updateActiveVideoObj}
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