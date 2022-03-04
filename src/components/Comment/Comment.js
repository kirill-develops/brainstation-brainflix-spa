import { Component } from 'react';
import LastSeen from '../../utils/LastSeen';
import apiUtils from '../../utils/apiUtils';

import deleteIcon from '../../assets/Icons/delete.svg'
import './Comment.scss';

class Comment extends Component {
  state = {
    relDate: LastSeen(this.props.timestamp)
  }

  // supposed to auto refresh the reletive time every 10sec
  componentDidMount() {
    this.timerID = setInterval(() => { this.setState({ relDate: LastSeen(this.props.timestamp) }) }, 10000)
  }

  handleClick = () => {
    apiUtils.deleteVideoComment(this.props.videoId, this.props.commentId)
      .then(() => {
        apiUtils.getVideoById(this.props.videoId)
          .then(result => this.props.updateActiveVideoObj(result.data))
      })
  }

  render() {

    const { name, comment } = this.props
    return (
      <>
        <div className='comment'>
          <div className='comment__left'>
            <div className="comment__avatar--blank"></div>
            <img
              onClick={() => this.handleClick()}
              src={deleteIcon}
              alt="delete icon"
              className='comment__icon' />
          </div>
          <div className="comment__right">
            <h3 className="comment__name">{name}</h3>
            <h4 className="comment__date">{this.state.relDate}</h4>
            <p className="comment__content">{comment}</p>
          </div>
        </div>
      </>
    )
  }
}

export default Comment;