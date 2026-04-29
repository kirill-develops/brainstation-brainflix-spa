import { Component } from 'react'
import apiUtils from '../../utils/apiUtils';

import avatar from "../../assets/Images/Mohan-muruge.jpg"
import "./CommentInput.scss"

class CommentInput extends Component {
  state = {
    commentValue: "",
    nameValue: "Mohan Muruge",
    clicked: 0,
    isSubmitting: false,
    submitStatus: "",
  }

  //resets clicked state upon updating active Vid
  componentDidUpdate(prevProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.setState({
        clicked: 0,
        submitStatus: "",
        isSubmitting: false,
      });
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
    if (this.state.isSubmitting) {
      return;
    }

    // checks if comment value is valid, then does API POST req and updates active Vid state
    if (this.isFormValid()) {
      this.setState({ isSubmitting: true, submitStatus: "" });

      apiUtils.postVideoComment(this.props.videoId, this.state.nameValue, this.state.commentValue)
        .then((res) => {
          this.props.updateActiveVideoObj(res.data);
          this.setState({
            commentValue: "",
            isSubmitting: false,
            submitStatus: "Comment posted.",
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            isSubmitting: false,
            submitStatus: "Could not post comment. Please try again.",
          });
        });
    } else {
      // if comment value not valid, set focus to comment field and update clicked state
      event.target.commentValue.focus();
      const newClick = this.state.clicked + 1;
      this.setState({ clicked: newClick });
    }
  }

  render() {

    const { commentSum } = this.props;
    const { isSubmitting, submitStatus } = this.state;

    return (

      <section className="comment-input">
        <h3
          className="comment-input__header">
          {commentSum} Comments
        </h3>
        <form onSubmit={(event) => this.handleSubmit(event)} className="comment-input__form">
          <img
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
                id="userComment"
                name="commentValue"
                onChange={this.handleChange}
                value={this.state.commentValue}
                placeholder="Add a new comment"
                disabled={isSubmitting}
                // check if user has clicked submit & if form is valid, if not adds error class from scss
                className={`comment-input__field ${!this.isCommentValid() && this.state.clicked ? "comment-input__field--error" : ""}`}
              />
              <button
                className='comment-input__button comment-input__button-text'
                disabled={isSubmitting}
              >
                {isSubmitting ? "POSTING..." : "COMMENT"}
              </button>
            </div>
            {submitStatus && (
              <p className="comment-input__status" aria-live="polite">
                {submitStatus}
              </p>
            )}
          </div>
        </form>
      </section>
    );
  }
};

export default CommentInput;
