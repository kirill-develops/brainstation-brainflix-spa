import './Media.scss';

const Media = ({poster, video}) => { 
  return (
    <video src={video} poster={poster} className="media" controls></video>
  );
};

export default Media;