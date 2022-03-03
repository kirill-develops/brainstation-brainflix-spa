import MediaDetails from '../MediaDetails/MediaDetails'
import './MediaHighlights.scss';

const MediaHighlights = ({ videoObj }) => {
  
  const { title, timestamp, channel, views, likes, description } = videoObj

  return (
    <div className="media-highlights">
      <h1 className="media-highlights__title">{title}</h1>

      <MediaDetails
        timestamp={timestamp}
        channel={channel}
        views={views}
        likes={likes}
      />

      <p className="media-highlights__content">{description}</p>
    </div>
  )
}

export default MediaHighlights;