import avatar from "../../assets/Images/Mohan-muruge.jpg"
import "./CommentInput.scss"

const CommentInput = (props) => {
  return (
    <section className="comment-input">
      <h3 className="comment-input__header">{props.data.comments.length} Comments</h3>
      <form className="comment-input__form" id="newComment">
        <img className="comment-input__avatar" htmlFor="userComment" src={avatar} alt=""></img>
        <div className="comment-input__right">
          <label className="comment-input__label" htmlFor="userComment">JOIN THE CONVERSATION</label>
          <textarea className="comment-input__field" id="userComment" name="userComment" placeholder="Add a new comment" rows="5"></textarea>
          <button className="comment-input__button" type="submit">COMMENT</button>
        </div>
      </form>
    </section>
  );
};

export default CommentInput;