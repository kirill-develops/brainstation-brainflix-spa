import LastSeen from "../../utils/LastSeen";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import likedLogo from "../../assets/Icons/liked.svg";
import './VideoInfoHighlights.scss'

const VideoInfoHighlights = ({ id, timestamp, channel, updateLike, views, likes, isLiked }) => {

  // upon LIKE being clicked, updateLike (in HomePage component)
  const handleClick = () => updateLike(id);

  // set relative value of active Vid timestamp
  const relDate = LastSeen(timestamp);

  return (
    <div className="video-info-highlights">
      <h4 className="video-info-highlights__label--special">By {channel}</h4>
      <h4 className="video-info-highlights__label--views">
        <img className="video-info-highlights__icon" alt="views icon" src={viewLogo} />
        {views}
      </h4>
      <h4 className="video-info-highlights__label--date">{relDate}</h4>
      <h4
        onClick={handleClick}
        className="video-info-highlights__label--likes">
        <img
          className='video-info-highlights__icon'
          // decides which Likes img to post based on isLiked state
          alt="likes icon" src={isLiked ? likedLogo : likesLogo} />
        {likes}
      </h4>
    </div>
  )
}

export default VideoInfoHighlights;