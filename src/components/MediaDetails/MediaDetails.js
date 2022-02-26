import LastSeen from "../../script/lastSeen";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import './MediaDetails.scss';

const MediaDetails = (props) => {
  const relDate = LastSeen(props.data.timestamp);

  return (
    <div className="media-highlights">
      <h1 className="media-highlights__title">{props.data.title}</h1>
      <ul className="media-detail">
        <li className="media-detail__label--special">By {props.data.channel}</li>
        <li className="media-detail__label">
          <img className="media-detail__icon" alt="views icon" src={viewLogo}>
          </img>{props.data.views}
        </li>
        <li className="media-detail__label">{relDate}</li>
        <li className="media-detail__label">
          <img className="media-detail__icon" alt="likes icon" src={likesLogo}>
          </img>{props.data.likes}</li>
      </ul>
      <p className="media-highlights__content">{props.data.description}</p>
    </div>
  )
}

export default MediaDetails;