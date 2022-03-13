import Comment from "../Comment/Comment";
import './CommentList.scss';

const CommentList = ({ commentsArr, videoId, updateActiveVideoObj }) => {

  // sorts comment array by timestamp and then maps values to sorted Comment components
  return (
    <div className="comment-list">
      {commentsArr
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(comment => {

          const { id, name, timestamp, comment: commentData } = comment;

          return (
            <Comment
              key={id}
              name={name}
              comment={commentData}
              commentId={id}
              videoId={videoId}
              timestamp={timestamp}
              updateActiveVideoObj={updateActiveVideoObj}
            />
          )
        })
      }
    </div>
  );
};

export default CommentList;