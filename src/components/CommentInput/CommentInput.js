import { Link } from 'react-router-dom'
import "./CommentInput.scss"
import avatar from "../../assets/Images/Mohan-muruge.jpg"
import { Component } from 'react'

class CommentInput extends Component {
  state = {
    commentValue: ""
  }

  handleCommentChange = (event) => {
    console.log(event)
    this.setState({ commentValue: event.target.value });
  }

  handleSubmit(event) {
    // validate there is both a  at least two words
    // api.post with name & comment
  }

  render() {
    const { commentSum } = this.props
    return (
      console.log(this.state.commentValue),
      <section className="comment-input">
        <h3 className="comment-input__header">{commentSum} Comments</h3>
        <form onSubmit={this.handleSubmit} className="comment-input__form" id="newComment">
          <img className="comment-input__avatar" htmlFor="userComment" src={avatar} alt=""></img>
          <div className="comment-input__right">
            <label className="comment-input__label" htmlFor="userComment">JOIN THE CONVERSATION</label>
            <div className="comment-input__right-container">
                <textarea onChange={this.handleCommentChange} value={this.state.commentValue} className="comment-input__field" id="userComment" name="userComment" placeholder="Add a new comment"></textarea>
              <Link to="" className=''>
                <button className="comment-input__button comment-input__button-text" onClick={(e) => e.preventDefault}>
                  COMMENT
                </button>
              </Link>
            </div>
          </div>
        </form>
      </section>
    );
  }
};

export default CommentInput;