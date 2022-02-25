import './MediaDetails.scss';

const MediaDetails = (props) => {

  return (
    <div className="media-highlights">
      <h1 className="media-highlights__title">{props.data.title}</h1>
      <ul className="media-detail">
        <li className="media-detail__author">{props.data.channel}</li>
        <li className="media-detail__date">{props.data.timestamp}</li>
        <li className="media-detail__view">{props.data.views}</li>
        <li className="media-detail__likes">{props.data.likes}</li>
      </ul>
      <p className="media-highlights__content">{props.data.description}</p>
    </div>
  )
}

export default MediaDetails;