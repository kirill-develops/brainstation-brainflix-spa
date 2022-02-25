import PreviewCard from '../PreviewCard/PreviewCard';
import './NextVideo.scss';

const NextVideo = ({ vidArr }) => {

  return (
    <div className='next-video'>
      <h2 className='next-video__header'>NEXT VIDEOS</h2>
      {vidArr.map(each =>
        <PreviewCard
          title={each.title}
          image={each.image}
          author={each.channel}
          key={each.id}
        />
      )}
    </div>
  )
}

export default NextVideo;