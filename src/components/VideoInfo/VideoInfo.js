import VideoInfoPlus from '../VideoInfoPlus/VideoInfoPlus'
import './VideoInfo.scss';

const VideoInfo = ({ videoObj }) => {
  
  const { title, timestamp, channel, views, likes, description } = videoObj

  return (
    <div className="video-info">
      <h1 className="video-info__title">{title}</h1>

      <VideoInfoPlus
        timestamp={timestamp}
        channel={channel}
        views={views}
        likes={likes}
      />

      <p className="video-info__content">{description}</p>
    </div>
  )
}

export default VideoInfo;