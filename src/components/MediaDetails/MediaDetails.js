import LastSeen from "../../utils/LastSeen";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import './MediaDetails.scss'

const MediaDetails = ({ timestamp, channel, views, likes }) => {

  const relDate = LastSeen(timestamp);

  return (
    <>
      <div className="media-detail">
        <h4 className="media-detail__label--special">By {channel}</h4>
        <h4 className="media-detail__label">
          <img className="media-detail__icon" alt="views icon" src={viewLogo}>
          </img>{views}
        </h4>
        <h4 className="media-detail__label">{relDate}</h4>
        <h4 className="media-detail__label">
          <img className="media-detail__icon" alt="likes icon" src={likesLogo}>
          </img>{likes}</h4>
      </div>

      <div className="media-detail--tablet">
        <div className="media-detail__section">
          <h4 className="media-detail__label--special media-detail__label--left">By {channel}</h4>
          <h4 className="media-detail__label media-detail__label--right">{relDate}</h4>
        </div>

        <div className="media-detail__section">
          <h4 className="media-detail__label media-detail__label--left">
            <img className="media-detail__icon" alt="views icon" src={viewLogo}>
            </img>{views}
          </h4>
          <h4 className="media-detail__label media-detail__label--right">
            <img className="media-detail__icon" alt="likes icon" src={likesLogo}>
            </img>{likes}</h4>
        </div>
      </div>
    </>
  )
}

export default MediaDetails;