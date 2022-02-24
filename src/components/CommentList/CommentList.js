import React from "react";

const CommentList = (props) => {

  const comments = props.data.comments.map(comment => {
    console.log(comment)
    const name = <h3 className="">{comment.name}</h3>;
    const timestamp = <h4 className="">{comment.timestamp}</h4>;
    const details = <p className="">{comment.comment}</p>;
    return <div>{name}{timestamp}{details}</div>;
  });

  return (
    <div>{comments}</div>
  );
};

export default CommentList;