import './PreviewCard.scss'

const PreviewCard = ({ title, image, author }) => {

  return (
    <div className='preview-card'>
      <img className='preview-card__media' alt={title} src={image}></img>
      <div className='preview-card__right'>
        <h3 className='preview-card__title'>{title}</h3>
        <h4 className='preview-card__author'>{author}</h4>
      </div>
    </div>
  )
}

export default PreviewCard;