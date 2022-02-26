import './Media.scss';

const Media = ({poster}) => { 
  return (
    <video src="" poster={poster} className="media" controls></video>
  );
};

export default Media;