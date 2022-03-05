import React, { Component } from 'react'
import heroImage from '../../assets/Images/Upload-video-preview.jpg'

class UploadPage extends Component {
  state = {
    videoTitle: "",
    videoDescription: ""
  }
  render() {

    return (
      <div>
        <h1 className=''>UploadPage</h1>
        <img src={heroImage} alt='' className='' />
        <h2 className=''>VIDEO THUMBNAIL</h2>
        <form onSubmit={(event) => this.handleSubmit(event)} className>
          <label htmlFor='videoTitle'
            className=''>TITLE YOUR VIDEO
            <input
              name='videoTitle'
              onChange={this.handleChange}
              value={this.state.videoTitle}
              type='text'
              placeholder='Add a title to your video'
            />
          </label>
          <label htmlFor='videoDescription'
            className=''>ADD A VIDEO DESCRIPTION
            <textarea
              name='videoDescription'
              onChange={this.handleChange}
              value={this.state.videoDescription}
              placeholder="Add a description to your video"
              className=''
            />
          </label>
          <button className=''>
            PUBLISH
          </button>
          <button className=''>
            CANCEL
          </button>
        </form>
      </div>
    )
  }
}

export default UploadPage