import { Component } from 'react'

import Media from '../../components/Media/Media';
import MediaHighlights from '../../components/MediaHighlights/MediaHighlights';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import NextVideo from '../../components/NextVideo/NextVideo';
import apiUtils from '../../utils/apiUtils';

class HomePage extends Component {
  state = {
    videoArray: [],
    activeVideoObj: null
  }

  componentDidMount() {
    const errorMessage = < p > Error fetching data, please try reloading in a few moments</p >
    console.log(errorMessage)
    apiUtils.getAll()
      .then(response => {
        this.setState({ videoArray: response.data })

        const plantId = this.props.match.params.id || this.state.videoArray[0].id
        
        apiUtils.getVideoById(plantId)
          .then(response => {
            this.setState({ activeVideoObj: response.data })
              .catch(error => { return errorMessage })
          }).catch(error => { return errorMessage })
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
          })
        })
    } else if (prevID !== currentID) {
      apiUtils.getVideoById(currentID)
        .then(response => {
          this.setState({
            activeVideoObj: response.data,
          })
        })
    }
  }

  updateActiveVideoObj = (vidObj) => {
    this.setState({
      activeVideoObj: vidObj
    })
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