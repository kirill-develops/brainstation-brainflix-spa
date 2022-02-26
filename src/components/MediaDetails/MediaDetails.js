import LastSeen from "../../script/LastSeen";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import './MediaDetails.scss'

const MediaDetails = ({ timestamp, channel, views, likes }) => {

  const relDate = LastSeen(timestamp);

  return (
    <>
      <ul className="media-detail">
        <li className="media-detail__label--special">By {channel}</li>
        <li className="media-detail__label">
          <img className="media-detail__icon" alt="views icon" src={viewLogo}>
          </img>{views}
        </li>
        <li className="media-detail__label">{relDate}</li>
        <li className="media-detail__label">
          <img className="media-detail__icon" alt="likes icon" src={likesLogo}>
          </img>{likes}</li>
      </ul>

      <ul className="media-detail--tablet">
        <div className="media-detail__section">
          <li className="media-detail__label--special media-detail__label--left">By {channel}</li>
          <li className="media-detail__label media-detail__label--right">{relDate}</li>
        </div>

        <div className="media-detail__section">
          <li className="media-detail__label media-detail__label--left">
            <img className="media-detail__icon" alt="views icon" src={viewLogo}>
            </img>{views}
          </li>
          <li className="media-detail__label media-detail__label--right">
            <img className="media-detail__icon" alt="likes icon" src={likesLogo}>
            </img>{likes}</li>
        </div>
      </ul>
    </>
  )
}

export default MediaDetails;