import VideoInfoPlus from '../VideoInfoPlus/VideoInfoPlus'
import './VideoInfo.scss';

const VideoInfo = ({ videoObj, updateLike, liked }) => {

  const { id, title, timestamp, channel, views, likes, description } = videoObj
  return (
    <div className="video-info">
      <h1 className="video-info__title">{title}</h1>

      <VideoInfoPlus
        id={id}
        timestamp={timestamp}
        channel={channel}
        views={views}
        likes={likes}
        updateLike={updateLike}
        liked={liked}
      />

      <p className="video-info__content">{description}</p>
    </div>
  )
}

export default VideoInfo;