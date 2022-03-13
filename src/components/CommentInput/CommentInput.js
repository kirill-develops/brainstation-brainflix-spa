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

  //resets clicked state upon updating active Vid
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ clicked: 0 });
    }
  }

  // updates state of form values as user enters keystrokes
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

  // trigger red outline on form field after button is clicked but form fails validation
  isCommentValid = () => {
    if (!this.state.commentValue && this.state.clicked > 0) return false;
    return true;
  }

  // triggered upon comment button click by user
  handleSubmit = (event) => {
    event.preventDefault();
    const errorMessage = < p > Error fetching data, please try reloading in a few moments</p >;

    // checks if comment value is valid, then does API POST req and updates active Vid state
    if (this.isFormValid()) {
      apiUtils.postVideoComment(this.props.videoId, this.state.nameValue, this.state.commentValue)
        .then((res) => this.props.updateActiveVideoObj(res.data))
        .catch(err => {
          console.log(err);
          return errorMessage;
        });
      this.setState({ commentValue: "" });
    } else {
      // if comment value not valid, set focus to comment field and update clicked state
      event.target.commentValue.focus();
      const newClick = this.state.clicked + 1;
      this.setState({ clicked: newClick });
    }
  }

  render() {

    const { commentSum } = this.props;

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
              // upon 2nd click w/ errors, produces instructional message for user
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
                // check if user has clicked submit & if form is valid, if not adds error class from scss
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