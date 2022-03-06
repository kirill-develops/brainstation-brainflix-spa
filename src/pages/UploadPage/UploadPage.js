import React, { Component } from 'react'
import heroImage from '../../assets/Images/Upload-video-preview.jpg'
import './UploadPage.scss'

class UploadPage extends Component {
  state = {
    videoTitle: "",
    videoDescription: "",
    clicked: false,
    submitted: false
  }

  handleChange = (event => {
    this.setState({ [event.target.name]: event.target.value });
  })

  isValueValid = () => {
    const title = this.state.videoTitle
    const description = this.state.videoDescription
    if (!title || !description) {
      return false;
    }
    return true;
  }


  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isValueValid()) {

      this.setState({ submitted: true })
      setTimeout(() => {
        this.props.history.push("/");
      }, 8000);
    } else if (event.target.publish) {

      this.setState({ clicked: true });
    }
  }

  render() {

    return (
      <div className='upload-page'>
        {!this.state.submitted &&
          <>
            <h1 className='upload-page__headline'>Upload Video</h1>
            <form
              onSubmit={(event) => this.handleSubmit(event)}
              className="upload-page__form">
              <label className='upload-page__label--image'>
                VIDEO THUMBNAIL
                <img
                  src={heroImage}
                  alt='upload page default hero banner photo'
                  className='upload-page__image' />
              </label>
              <div className='upload-page__form-block'>
                <label htmlFor='videoTitle'
                  className='upload-page__label'
                >TITLE YOUR VIDEO
                  <input
                    name='videoTitle'
                    onChange={this.handleChange}
                    value={this.state.videoTitle}
                    type='text'
                    placeholder='Add a title to your video'
                    className={`upload-page__input ${this.state.clicked && this.state.videoTitle === "" ? "upload-page__input--invalid" : ""}`}
                  />
                </label>
                <label htmlFor='videoDescription'
                  className='upload-page__label'
                >ADD A VIDEO DESCRIPTION
                  <textarea
                    name='videoDescription'
                    onChange={this.handleChange}
                    value={this.state.videoDescription}
                    placeholder="Add a description to your video"
                    className={`upload-page__input--big ${this.state.clicked && this.state.videoDescription === "" ? "upload-page__input--invalid" : ""}`}
                  />
                </label>
              </div>

              <div className='upload-page__button-block'>
                <button
                  name='publish'
                  className='upload-page__publish-button'>
                  PUBLISH
                </button>
                <button
                  name='cancel'
                  onClick={() => this.props.history.push("/")}
                  className='upload-page__cancel-button'>
                  CANCEL
                </button>
              </div>
            </form>
          </>
        }

        {
          this.state.submitted &&
          <div className='upload-page__submitted-block'>
            <h3 className='upload-page__headline--submitted'>
              Thank you for Upload!
            </h3>
            <p className='upload-page__label'>
              You'll recieve a notification when you're video is available to be shared
            </p>
            <p className='upload-page__label'>
              Please wait as you are redirected to the home page
            </p>
          </div>
        }
      </div >
    )
  }
}

export default UploadPage