import { Component } from 'react';
import LastSeen from '../../utils/LastSeen';
import apiUtils from '../../utils/apiUtils';

import deleteIcon from '../../assets/Icons/delete.svg'
import './Comment.scss';

class Comment extends Component {

  state = {
    relDate: LastSeen(this.props.timestamp),
    isDeleting: false,
  };

  // click handler for deleting comments
  handleDelete = () => {
    if (this.state.isDeleting) {
      return;
    }

    const shouldDelete = window.confirm("Delete this comment?");
    if (!shouldDelete) {
      return;
    }

    const { videoId, commentId, updateActiveVideoObj } = this.props;
    this.setState({ isDeleting: true });

    // API DELETE req sending vidID and commentID then updates active vid Obj
    apiUtils.deleteVideoComment(videoId, commentId)
      .then(res => updateActiveVideoObj(res.data))
      .catch(err => {
        console.log(err);
        this.setState({ isDeleting: false });
      });
  };

  render() {

    const { relDate, isDeleting } = this.state;
    const { name, comment } = this.props;

    return (
      <div className='comment'>
        <div className='comment__left'>
          <div className="comment__avatar--blank"></div>
          <button
            type="button"
            onClick={() => this.handleDelete()}
            className='comment__icon-button'
            aria-label={`Delete comment from ${name}`}
            disabled={isDeleting}
          >
            <img
              src={deleteIcon}
              alt=""
              aria-hidden="true"
              className='comment__icon'
            />
          </button>
        </div>
        <div className="comment__right">
          <h3 className="comment__name">{name}</h3>
          <h4 className="comment__date">{relDate}</h4>
          <p className="comment__content">{comment}</p>
        </div>
      </div>
    )
  };
};

export default Comment;
