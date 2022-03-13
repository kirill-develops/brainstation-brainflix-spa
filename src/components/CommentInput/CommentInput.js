import { Component } from 'react'
import apiUtils from '../../utils/apiUtils';

import avatar from "../../assets/Images/Mohan-muruge.jpg"
import "./CommentInput.scss"

class CommentInput extends Component {
  state = {
    commentValue: "",
    nameValue: "Mohan Muruge",
    clicked: 0,
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // checks in the handleSubmit if the form is valid
  isFormValid = () => {
    if (!this.state.commentValue) {
      return false;
    }
    return true;
  }

  // used to trigger red outline on comment field after buttom is pressed but comment field fails validation
  isCommentValid = () => {

    if (!this.state.commentValue && this.state.clicked > 0) {
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
      apiUtils.postVideoComment(this.props.videoId, this.state.nameValue, this.state.commentValue)
        .then((res) => this.props.updateActiveVideoObj(res.data))
        .catch(err => {
          console.log(err);
          <h2>Please Refresh the screen</h2>;
        });
      this.setState({ commentValue: "" });

    } else {
      //set focus to comment field
      event.target.commentValue.focus()
      const newClick = this.state.clicked + 1
      this.setState({ clicked: newClick })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ clicked: 0 })
    }
  }

  render() {

    const { commentSum } = this.props

    return (

      <section className="comment-input">
        <h3
          className="comment-input__header">
          {commentSum} Comments
        </h3>

        <form onSubmit={(event) => this.handleSubmit(event)} className="comment-input__form">
          <img
            htmlFor="userComment"
            src={avatar}
            alt={`${this.state.nameValue}'s profile`}
            className='comment-input__avatar'
          />
          <div className="comment-input__right">
            <label
              htmlFor="userComment"
              className="comment-input__label">
              JOIN THE CONVERSATION
              {this.state.clicked >= 2 && <p className='comment-input__label--error'
              >   Please enter a comment</p>}
            </label>
            <div className="comment-input__right-container">
              <textarea
                name="commentValue"
                onChange={this.handleChange}
                value={this.state.commentValue}
                placeholder="Add a new comment"
                className={`comment-input__field ${!this.isCommentValid() && this.state.clicked ? "comment-input__field--error" : ""}`}
              />
              <button className='comment-input__button comment-input__button-text'>
                COMMENT
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
};

export default CommentInput;