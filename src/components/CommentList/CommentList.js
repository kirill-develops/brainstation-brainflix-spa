import Comment from "../Comment/Comment";
import './CommentList.scss';

const CommentList = ({ commentsArr, videoId, updateActiveVideoObj }) => {

  return (
    <div className="comment-list">
      {commentsArr.sort((a,b)=> b.timestamp - a.timestamp).map(comment => {
        const { id, name, timestamp, comment: commentData } = comment;

        return (
          <Comment
            name={name}
            comment={commentData}
            commentId={id}
            videoId={videoId}
            timestamp={timestamp}
            updateActiveVideoObj={updateActiveVideoObj}
            key={id}
          />
        )
      })}
    </div>
  );
};

export default CommentList;