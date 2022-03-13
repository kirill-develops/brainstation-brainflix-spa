import React, { Component } from 'react'
import heroImage from '../../assets/Images/Upload-video-preview.jpg'
import Poster from '../../assets/Images/video-upload.png'
import apiUtils from '../../utils/apiUtils'
import './UploadPage.scss'

class UploadPage extends Component {

  state = {
    videoTitle: "",
    videoDescription: "",
    videoFile: null,
    clicked: false,
    submitted: false,
    vidInputCaption: 'VIDEO THUMBNAIL'
  }

  // updates state of form fields as user types
  handleChange = (e => {
    this.setState({ [e.target.name]: e.target.value });
  })

  // upon file submission, saves an objURL of the image
  handleFile = (e => {
    let reader = new FileReader();

    reader.onload = (e) => {
      this.setState({ videoFile: e.target.result });
      console.log(JSON.stringify(this.state.videoFile));
    };
    reader.readAsDataURL(e.target.files[0]);
  })

  handleHoverOver = () => {
    this.setState({ vidInputCaption: 'VIDEO THUMBNAIL CLICK TO UPLOAD' })
  }
  handleHoverOut = () => {
    this.setState({ vidInputCaption: 'VIDEO THUMBNAIL' })
  }

  // checks to ensure neither form is empty
  isValueValid = () => {
    const title = this.state.videoTitle;
    const description = this.state.videoDescription;

    if (!title || !description) {
      return false;
    }
    return true;
  }

  // handles form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = < p > Error fetching data, please try reloading in a few moments</p >;

    const { videoTitle, videoDescription } = e.target;
    const { value: title } = videoTitle;
    const { value: description } = videoDescription;

    if (this.isValueValid()) {
      const file = this.state.videoFile || Poster;
      console.log(file);
      apiUtils.postVideo(title, description, file)
        .then((res) => {
          const { id } = res.data;
          this.setState({ submitted: true })
          setTimeout(() => {
            this.props.history.push(`video/${id
              }`);
          }, 2000);
        })
        .catch(err => {
          console.log(err);
          return errorMessage;
        })
    } else if (e.target.publish) {

      this.setState({ clicked: true });
    }
  }

  render() {

    return (
      <div className='upload-page'>
        {// the form is displayed until 
          !this.state.submitted &&
          <>
            <h1 className='upload-page__headline'>Upload Video</h1>
            <form
              onSubmit={(e) => this.handleSubmit(e)}
              className="upload-page__form">
              <label
                className='upload-page__label--image'
                onMouseOver={this.handleHoverOver}
                onMouseOut={this.handleHoverOut}
              >{this.state.vidInputCaption}
                <img
                  src={this.state.videoFile || heroImage}
                  alt='upload page default hero banner'
                  className='upload-page__image'
                />
                <input
                  type='file'
                  onChange={this.handleFile}
                  className='upload-page__file-button'
                />
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
                    className={`upload-page__input ${this.state.clicked && this.state.videoTitle === "" ? "upload-page__input--error" : ""}`}
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
                    className={`upload-page__input--big ${this.state.clicked && this.state.videoDescription === "" ? "upload-page__input--error" : ""}`}
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

        {// upon form submission, this is displayed before taking user to newly created page for uploaded video
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