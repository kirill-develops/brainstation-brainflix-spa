import LastSeen from "../../script/LastSeen";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import './MediaDetails.scss';

const MediaDetails = ({ timestamp, title, channel, views, likes, description}) => {
  const relDate = LastSeen(timestamp);

  return (
    <div className="media-highlights">
      <h1 className="media-highlights__title">{title}</h1>
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
      <p className="media-highlights__content">{description}</p>
    </div>
  )
}

export default MediaDetails;