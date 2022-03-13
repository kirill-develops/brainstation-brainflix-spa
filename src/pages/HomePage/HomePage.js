import { Component } from 'react';
import apiUtils from '../../utils/apiUtils';

import ErrorPage from '../ErrorPage/ErrorPage';
import VideoBlock from '../../components/VideoBlock/VideoBlock';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import NextVideo from '../../components/NextVideo/NextVideo';

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

        // create Arr of video details where [0]= videoID & [1]= isLiked t/f to store which videos liked and which are not
        const likedVids = res.data.map(vid => { return { 'id': vid.id, 'liked': false } });
        // update state to response data and likedVids
        this.setState({ videoArray: res.data, likedVids: likedVids });

        // decide if coming from a specific URL or the root '/' url and set VideoID to specific vid or first index
        const videoId = this.props.match.params.videoID || this.state.videoArray[0].id;
        const { videoID: vidParams } = this.props.match.params;

        // if user enters a URL & it's not found in the vidArr, then 404 screen is displayed by setting errorState to true
        if (vidParams && !this.state.videoArray.find(vid => vid.id === vidParams)) {
          this.setState({ error: true });
          return;
        }

        // API call to update active Video Obj state
        apiUtils.getVideoById(videoId)
          .then(res => {
            this.setState({ activeVideoObj: res.data })
          }).catch(err => {
            console.log(err);
            return errorMessage;
          })
      }).catch(err => {
        console.log(err);
        return errorMessage;
      })
  }

  componentDidUpdate(prevProps) {
    const errorMessage = < p > Error fetching data, please try reloading in a few moments</p >

    // deconstruct current and previous params
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
          return errorMessage;
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
          return errorMessage;
        })
    }
  }

  // I didn't ignore the following feedback, however due to poor time management last week, i didnt get a chance to ask what it means:
  //feedback: - You should be using your updateActiveVideoObj better as you are doing this several times within your Home page and comment form
  updateActiveVideoObj = (vidObj) => {
    this.setState({
      activeVideoObj: vidObj
    })
  }

  updateLike = (videoId) => {
    const errorMessage = < p > Error fetching data, please try reloading in a few moments</p >

    // find ID of liked video and see if it's state is liked is active
    const { id, liked } = this.state.likedVids.find(vid => vid.id === videoId);

    // find index of liked video in arr
    const likedIndex = this.state.likedVids.findIndex(vid => vid.id === videoId);

    // API call to update like count based on if the user's likedState is active
    apiUtils.likeVideo(id, liked)
      .then(res => {
        const updateLikes = this.state.likedVids;
        updateLikes[likedIndex].liked = res.data[0];
        this.updateActiveVideoObj(res.data[1]);
      }).catch(err => {
        console.log(err);
        return errorMessage;
      })
  }

  render() {

    // check to see if the data is loading or if there is error with the info
    if (!this.state.activeVideoObj && !this.state.error) {
      return <p>Loading...</p>
    } else if (this.state.error) {
      return <ErrorPage />
    }

    const { image, comments, video, id } = this.state.activeVideoObj;
    const { activeVideoObj } = this.state;

    // creates arr of vids not matching active vidID
    const filteredVids = this.state.videoArray.filter((video) => video.id !== id);

    // create var with boolean value regarding if active vid is liked
    const isLiked = this.state.likedVids.find(vid => vid.id === id).liked;

    return (
      <div className='App'>
        <VideoBlock poster={image} video={video} id={id} />
        <div className='main--desktop'>
          <div className="main__left--desktop">
            <VideoInfo
              videoObj={activeVideoObj}
              updateLike={this.updateLike}
              isLiked={isLiked}
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
            vidArr={filteredVids}
          />
        </div>
      </div>
    )
  }
}

export default HomePage;