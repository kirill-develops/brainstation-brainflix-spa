import LastSeen from "../../utils/LastSeen";
import viewLogo from "../../assets/Icons/views.svg";
import likesLogo from "../../assets/Icons/likes.svg";
import likedLogo from "../../assets/Icons/liked.svg";
import './VideoInfoPlus.scss'


const VideoInfoPlus = ({ id, timestamp, channel, updateLike, views, likes, liked }) => {

  const handleClick = () => {
    updateLike(id);
  }

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
          onClick={handleClick}
          className="video-info-plus__label--likes">
          <img
            className='video-info-plus__icon'
            alt="likes icon" src={liked ? likedLogo : likesLogo}>
          </img>{likes}
        </h4>
      </div>
    </>
  )
}

export default VideoInfoPlus;