import './Media.scss';

const Media = (props) => { 
  const media = props.data.image;
  return (
    <div className="media-window">
      <img src={media} className="media-window__file" alt=""></img>
    </div>
  );
};

export default Media;