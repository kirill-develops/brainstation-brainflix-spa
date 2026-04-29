import './PreviewCard.scss'

const PreviewCard = ({ title, image, author, isActive }) => {

  return (
    <>
      <div className='preview-card__media-housing'>
        <img className='preview-card__media' alt={title} src={image} loading="lazy"></img>
      </div>
      <div className='preview-card__right'>
        {isActive && <p className='preview-card__status'>NOW PLAYING</p>}
        <h3 className='preview-card__title'>{title}</h3>
        <h4 className='preview-card__author'>{author}</h4>
      </div>
    </>
  )
}

export default PreviewCard;
