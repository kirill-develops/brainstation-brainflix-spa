import './Media.scss';

const Media = ({video}) => { 
  return (
    <div className="media-window">
      <img src={video} className="media-window__file" alt=""></img>
    </div>
  );
};

export default Media;