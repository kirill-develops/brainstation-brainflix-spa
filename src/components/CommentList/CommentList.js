import Comment from "../Comment/Comment";
import './CommentList.scss';

const CommentList = ({ commentsArr }) => {

  return (
    <div className="comment-list">
      {commentsArr.map(comment => {

        const { name, timestamp, comment: commentData } = comment;

        return (
          <Comment
            name={name}
            timestamp={timestamp}
            comment={commentData}
            key={timestamp}
          />
        )
      })}
    </div>
  );
};

export default CommentList;