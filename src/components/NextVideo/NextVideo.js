import PreviewCard from '../PreviewCard/PreviewCard';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './NextVideo.scss';

class NextVideo extends Component {

  render() {
    const { vidArr } = this.props

    return (
      <div className='next-video'>
        <h2 className='next-video__header'>NEXT VIDEOS</h2>
        {vidArr.map(video =>
          <Link to={`/video/${video.id}`} className='preview-card' key={video.id}>
            < PreviewCard
              id={video.id}
              title={video.title}
              image={video.image}
              author={video.channel}
            />
          </Link>
        )}
      </div>
    )
  }
}

export default NextVideo;