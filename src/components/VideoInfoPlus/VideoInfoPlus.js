import LastSeen from "../../utils/LastSeen";
import apiUtils from "../../utils/apiUtils";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import likedLogo from "../../assets/Icons/liked.svg";
import './VideoInfoPlus.scss'
import { Component } from "react";


class VideoInfoPlus extends Component {
  state = {
    liked: false
  }

  handleClick = () => {
    apiUtils.likeVideo(this.props.id, this.state.liked)
      .then(res => {
        this.setState({
          liked: res.data[0]
        })
        this.props.updateActiveVideoObj(res.data[1])
      })
  }


  render() {
    const { timestamp, channel, views, likes } = this.props;
    const relDate = LastSeen(timestamp);
    return (
      <>
        <div className="video-info-plus">
          <h4 className="video-info-plus__label--special">By {channel}</h4>

          <li className="video-info-plus__label--views">
            <img className="video-info-plus__icon" alt="views icon" src={viewLogo} />
            {views}
          </li>

          <h4 className="video-info-plus__label--date">{relDate}</h4>

          <h4
            onClick={this.handleClick}
            className="video-info-plus__label--likes">
            <img
              className='video-info-plus__icon'
              alt="likes icon" src={this.state.liked ? likedLogo : likesLogo}>
            </img>{likes}
          </h4>
        </div>
      </>
    )
  }
}

export default VideoInfoPlus;