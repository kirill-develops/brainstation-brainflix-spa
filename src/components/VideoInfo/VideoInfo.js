import VideoInfoPlus from '../VideoInfoPlus/VideoInfoPlus'
import './VideoInfo.scss';

const VideoInfo = ({ videoObj, updateActiveVideoObj }) => {

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
        updateActiveVideoObj={updateActiveVideoObj}
      />

      <p className="video-info__content">{description}</p>
    </div>
  )
}

export default VideoInfo;