import React, {PropTypes, Component } from 'react';
import Comment from '../containers/Comment';

class ListComment extends Component {
  constructor(props){
    super(props);
  }

  onClickComment(direction) {
  }

  render() {
    return (
      <ul className="list-comment">
        { 
          this.props.comments.reverse().map(comment =>
          <Comment
            key = {comment.commentId}
            {...comment}
            onClick={() => onClickComment(comment.commentId)}
          />)
        }
      </ul>
    )
  }
}

ListComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClickComment: PropTypes.func.isRequired
}

export default ListComment