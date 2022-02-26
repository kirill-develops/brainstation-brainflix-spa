import './PreviewCard.scss'

const PreviewCard = ({ title, image, author, handleVideoChange, id }) => {

  const clickHandler = (event, video) => {
    event.preventDefault();
    handleVideoChange(video);
  }

  return (
    <a className='preview-card' href={title} onClick={(event) => { clickHandler(event, id) }}>
      <img className='preview-card__media' alt={title} src={image}></img>
      <div className='preview-card__right'>
        <h3 className='preview-card__title'>{title}</h3>
        <h4 className='preview-card__author'>{author}</h4>
      </div>
    </a>
  )
}

export default PreviewCard;