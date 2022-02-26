import PreviewCard from '../PreviewCard/PreviewCard';
import './NextVideo.scss';

const NextVideo = ({ vidArr, handleVideoChange }) => {

  return (
    <div className='next-video'>
      <h2 className='next-video__header'>NEXT VIDEOS</h2>
      {vidArr.sort().map(video => 
        < PreviewCard
          key={video.id}
          id={video.id}
          title={video.title}
          image={video.image}
          author={video.channel}
          handleVideoChange={handleVideoChange}
        />
      )}
    </div>
  )
}

export default NextVideo;