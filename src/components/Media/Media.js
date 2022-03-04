import './Media.scss';

const Media = ({poster}) => { 
  return (
    <video poster={poster} className="media" controls></video>
  );
};

export default Media;