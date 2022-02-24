import avatar from "../../assets/Images/Mohan-muruge.jpg"

const CommentInput = (props) => {
  return (
    <section className="comment-input">
      <h3 className="comment-input__title">{props.data.comments.length} Comments</h3>
      <form className="comment-input__form" id="newComment">
        <img className="comment-input__avatar" htmlFor="userComment" src={avatar} alt=""></img>
        <label className="comment-input__label" htmlFor="userComment">Join the Conversation</label>
        <textarea className="comment-input__field" id="userComment" name="userComment" placeholder="Add a new comment"></textarea>
        <button className="comment-input__button" type="submit">COMMENT</button>
      </form>
    </section>
  );
};

export default CommentInput;