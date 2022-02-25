import './Comment.scss';

const Comment = ({name, timestamp, comment}) => {

  return (
    <div className='comment'>
      <div className="comment__avatar--blank"></div>
    <div className="comment__right">
      <h3 className="comment__name">{name}</h3>
      <h4 className="comment__date">{timestamp}</h4>
      <p className="comment__content">{comment}</p>
    </div>
    </div>
  )
}

export default Comment;