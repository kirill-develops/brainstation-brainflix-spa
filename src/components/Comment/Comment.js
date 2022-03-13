import { Component } from 'react';
import LastSeen from '../../utils/LastSeen';
import apiUtils from '../../utils/apiUtils';

import deleteIcon from '../../assets/Icons/delete.svg'
import './Comment.scss';

class Comment extends Component {

  state = {
    relDate: LastSeen(this.props.timestamp)
  };

  // click handler for deleting comments
  handleDelete = () => {
    const errorMessage = < p > Error fetching data, please try reloading in a few moments</p >;

    const { videoId, commentId, updateActiveVideoObj } = this.props;
    // API DELETE req sending vidID and commentID then updates active vid Obj
    apiUtils.deleteVideoComment(videoId, commentId)
      .then(res => updateActiveVideoObj(res.data))
      .catch(err => {
        console.log(err);
        return errorMessage;
      });
  };

  render() {

    const { relDate } = this.state;
    const { name, comment } = this.props;

    return (
      <div className='comment'>
        <div className='comment__left'>
          <div className="comment__avatar--blank"></div>
          <img
            onClick={() => this.handleDelete()}
            src={deleteIcon}
            alt="delete icon"
            className='comment__icon'
          />
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