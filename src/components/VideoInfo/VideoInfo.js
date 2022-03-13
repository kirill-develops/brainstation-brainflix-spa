import VideoInfoHighlights from '../VideoInfoHighlights/VideoInfoHighlights';
import './VideoInfo.scss';

const VideoInfo = ({ videoObj, updateLike, isLiked }) => {

  const { id, title, timestamp, channel, views, likes, description } = videoObj;

  return (
    <div className="video-info">
      <h1 className="video-info__title">{title}</h1>
      <VideoInfoHighlights
        id={id}
        timestamp={timestamp}
        channel={channel}
        views={views}
        likes={likes}
        updateLike={updateLike}
        isLiked={isLiked}
      />
      <p className="video-info__content">{description}</p>
    </div>
  )
}

export default VideoInfo;