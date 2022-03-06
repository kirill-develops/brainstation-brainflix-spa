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
    this.setState({ [event.target.name]: event.target.value});   
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
        .then(() => {
          apiUtils.getVideoById(this.props.videoId)
            .then(result => this.props.updateActiveVideoObj(result.data))
          console.log(event.target.commentValue.value)
          // event.target.commentValue.value.reset();
          this.setState({ commentValue: "" })
        })
    } else {
      //set focus to comment field
      event.target.commentValue.focus()
      const newClick = this.state.clicked + 1
      this.setState({ clicked: newClick })
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.videoId, prevProps.videoId);
    if (this.props !== prevProps ) {
      this.setState({ clicked: 0})
    }
  }

  render() {

    const { commentSum } = this.props

    const badUser = this.state.clicked === 11 || this.state.clicked === 13

    return (

      <section className="comment-input">
        <h3
          className="comment-input__header">
          {commentSum} Comments {this.state.clicked === 13 && "and none will be coming from you"}
        </h3>

        {this.state.clicked < 13 &&
          <form onSubmit={(event) => this.handleSubmit(event)} className="comment-input__form">
            <img
              htmlFor="userComment"
              src={avatar}
              alt={`${this.state.nameValue}'s profile`}
              className={`comment-input__avatar ${badUser && "comment-input__avatar--disabled"}`}
            />
            <div className="comment-input__right">
              <label
                htmlFor="userComment"
                className="comment-input__label">
                JOIN THE CONVERSATION
                {this.state.clicked === 2 && <p className='comment-input__label--error'> Please Enter a Comment</p>}
                {this.state.clicked === 3 && <p className='comment-input__label--error'> Bueller?</p>}
                {this.state.clicked === 4 && <p className='comment-input__label--error'> Why are you the way that you are?</p>}
                {this.state.clicked === 5 && <p className='comment-input__label--error'> Honestly...</p>}
                {this.state.clicked === 6 && <p className='comment-input__label--error'> Every time I try to do something fun or exciting, you make it not that way</p>}
                {this.state.clicked === 7 && <p className='comment-input__label--error'> I hate so much about the things that you choose to be</p>}
                {this.state.clicked === 8 && <p className='comment-input__label--error'> You wanna hear a lie? I think you’re great. You’re my best friend</p>}
                {this.state.clicked === 9 && <p className='comment-input__label--error'> Who let the lemon-head into the room? You are a waste of life, and you should give up</p>}
                {this.state.clicked === 10 && <p className='comment-input__label--error'> If I had a gun, with two bullets, and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice</p>}
                {this.state.clicked === 11 && <><p className='comment-input__label--error'> No where in your incoherent response were you even close to anything that could be considered a rational thought. Our computers are now dumber for computing it</p> <p className='comment-input__label--error'> Posting comments is suspended and may god have mercy on your soul</p></>}
                {this.state.clicked === 12 && <p className='comment-input__label--error'> !!! I swear, this is your LAST CHANCE !!!</p>}
              </label>
              <div className="comment-input__right-container">
                <textarea
                  name="commentValue"
                  onChange={this.handleChange}
                  value={this.state.commentValue}
                  disabled={badUser}
                  placeholder="Add a new comment"
                  className={`comment-input__field
                  ${((!this.isCommentValid() && this.state.clicked < 11) || this.state.clicked === 12) ? "comment-input__field--invalid" : ""}
                  ${this.state.clicked === 11 ? "comment-input__field--disabled" : ""}`}
                />
                <button className={`comment-input__button comment-input__button-text ${badUser && "comment-input__button--disabled"}`}>
                  COMMENT
                </button>
              </div>
            </div>
          </form>
        }
      </section>
    );
  }
};

export default CommentInput;