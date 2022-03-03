import { Component } from 'react';

import LastSeen from '../../utils/LastSeen';
import './Comment.scss';

class Comment extends Component {
  state = {
    relDate: LastSeen(this.props.timestamp)
  }

  componentDidMount() {
    this.timerID = setInterval(() => { this.updateComment(this.props.timestamp) }, 10000)
  }

  updateComment = (timestamp) => this.setState( {relDate: LastSeen(timestamp)})

  render() {

    const { name, comment } = this.props
    return (
      <div className='comment'>
        <div className="comment__avatar--blank"></div>
        <div className="comment__right">
          <h3 className="comment__name">{name}</h3>
          <h4 className="comment__date">{this.state.relDate}</h4>
          <p className="comment__content">{comment}</p>
        </div>
      </div>
    )
  }
}

export default Comment;