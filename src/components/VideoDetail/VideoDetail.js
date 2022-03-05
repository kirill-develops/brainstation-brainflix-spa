import LastSeen from "../../utils/LastSeen";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import './VideoDetail.scss'

const VideoDetails = ({ timestamp, channel, views, likes }) => {

  const relDate = LastSeen(timestamp);

  return (
    <>
      <div className="video-detail">
        <h4 className="video-detail__label--special">By {channel}</h4>
        <h4 className="video-detail__label">
          <img className="video-detail__icon" alt="views icon" src={viewLogo}>
          </img>{views}
        </h4>
        <h4 className="video-detail__label">{relDate}</h4>
        <h4 className="video-detail__label">
          <img className="video-detail__icon" alt="likes icon" src={likesLogo}>
          </img>{likes}</h4>
      </div>

      <div className="video-detail--tablet">
        <div className="video-detail__section">
          <h4 className="video-detail__label--special video-detail__label--left">By {channel}</h4>
          <h4 className="video-detail__label video-detail__label--right">{relDate}</h4>
        </div>

        <div className="video-detail__section">
          <h4 className="video-detail__label video-detail__label--left">
            <img className="video-detail__icon" alt="views icon" src={viewLogo}>
            </img>{views}
          </h4>
          <h4 className="video-detail__label video-detail__label--right">
            <img className="video-detail__icon" alt="likes icon" src={likesLogo}>
            </img>{likes}</h4>
        </div>
      </div>
    </>
  )
}

export default VideoDetails;