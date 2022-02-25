
const Comment = (comment) => {
  console.log(comment);

  return (
    <div>
      <h3 className="">{comment.name}</h3>
      <h4 className="">{comment.timestamp}</h4>
      <p className="">{comment.comment}</p>
    </div>
  )
}

export default Comment;