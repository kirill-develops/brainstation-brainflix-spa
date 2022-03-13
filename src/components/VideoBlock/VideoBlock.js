import './VideoBlock.scss';

const VideoBlock = ({ poster, video }) => {
  return (
    <video poster={poster} className="video-block" controls>
      <source src={video} type="video" />
    </video>
  );
};

export default VideoBlock;