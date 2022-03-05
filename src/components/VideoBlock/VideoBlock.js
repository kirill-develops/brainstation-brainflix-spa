import './VideoBlock.scss';

const VideoBlock = ({poster}) => { 
  return (
    <video poster={poster} className="video-block" controls></video>
  );
};

export default VideoBlock;