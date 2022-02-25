import Comment from "../Comment/Comment";


const CommentList = (props) => {

  return (
    <div className="comment-list">
      {props.data.comments.map(comment =>
        <Comment
          name={comment.name}
          timestamp={comment.timestamp}
          comment={comment.comment}
          key={comment.timestamp}
        />
      )}
    </div>
  );
};

export default CommentList;