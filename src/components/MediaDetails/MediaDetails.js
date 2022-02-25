import './MediaDetails.scss';

const MediaDetails = (props) => {

  return (
    <div className="">
      <h1 className="">{props.data.title}</h1>
      <ul className="">
        <li className="">{props.data.channel}</li>
        <li className="">{props.data.timestamp}</li>
        <li className="">{props.data.views}</li>
        <li className="">{props.data.likes}</li>
      </ul>
      <p className="">{props.data.description}</p>
    </div>
  )
}

export default MediaDetails;