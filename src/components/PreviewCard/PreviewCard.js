import { Link } from 'react-router-dom'
import './PreviewCard.scss'

const PreviewCard = ({ title, image, author, handleVideoChange, id }) => {

  const clickHandler = (event, video) => {
    event.preventDefault();
    handleVideoChange(video);
  }

  return (
    <Link className='preview-card' to={"/" + id} onClick={(event) => { clickHandler(event, id) }}>
      <img className='preview-card__media' alt={title} src={image}></img>
      <div className='preview-card__right'>
        <h3 className='preview-card__title'>{title}</h3>
        <h4 className='preview-card__author'>{author}</h4>
      </div>
    </Link>
  )
}

export default PreviewCard;