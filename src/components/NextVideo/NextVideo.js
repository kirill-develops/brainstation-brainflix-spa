import PreviewCard from '../PreviewCard/PreviewCard';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './NextVideo.scss';

class NextVideo extends Component {

  render() {

    const { vidArr, activeVideoId } = this.props;
    if (!vidArr.length) {
      return (
        <div className='next-video'>
          <h2 className='next-video__header'>VIDEO QUEUE</h2>
          <p className='next-video__empty'>No videos available.</p>
        </div>
      );
    }

    return (
      <div className='next-video'>
        <h2 className='next-video__header'>VIDEO QUEUE</h2>
        {vidArr.map(video => {
          const isActive = video.id === activeVideoId;

          return (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className={`preview-card ${isActive ? 'preview-card--active' : ''}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={(event) => {
              if (isActive) {
                event.preventDefault();
              }
            }}
          >
            <PreviewCard
              id={video.id}
              title={video.title}
              image={video.image}
              author={video.channel}
              isActive={isActive}
            />
          </Link>
          )
        })}
      </div>
    )
  };
};

export default NextVideo;
