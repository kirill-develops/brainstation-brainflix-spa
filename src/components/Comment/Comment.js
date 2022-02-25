
const Comment = ({name, timestamp, comment}) => {

  return (
    <div>
      <h3 className="comment-list__name">{name}</h3>
      <h4 className="comment-list__date">{timestamp}</h4>
      <p className="comment-list__content">{comment}</p>
    </div>
  )
}

export default Comment;