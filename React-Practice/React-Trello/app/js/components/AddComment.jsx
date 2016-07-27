import React, { PropTypes, Component } from 'react';
import ListComment from '../containers/ListComment';

class AddComment extends Component{
  constructor(props){
    super(props);
    this.addCommentItem = this.addCommentItem.bind(this);
    this.props.state.boards.board.showCreateComment = false;
  }

  addCommentItem(event) {
    event.preventDefault();
    const keyword = this.refs.keyword.value;
    if (!keyword.trim()) {
      return 
    }
    this.props.addCommentItem(this.props.state.boards.board.memberId, keyword);
    this.refs.keyword.value ='';
  }

  handleClosePopupComment(direction) {
    this.props.handleClosePopupComment(direction);
  }

  render() {
    return (
      <div>
        <div className={this.props.state.boards.board.showCreateComment ? 'window-overlay' : 'window-overlay-hide' }>
        <div className="window-comment">
          <a key="close" className="close" onClick={this.handleClosePopupComment.bind(this, false)}>X</a>
          <div className="comment-detail-window">
            <div className="window-header">
              <div className="window-title">
                <h2 className="card-detail-title">Create Board </h2>
              </div>
            </div>
            <div className="window-main">
              <div className="window-module">
              </div>
              <div className="window-module">
                <div className="window-module-title">Add Comment</div>
                <div className="new-comment">
                  <form onSubmit={this.addCommentItem}>
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-input input-lg"
                      placeholder="What are you organzing?"
                      ref="keyword"
                      />
                    <button className="create-board" type="submit">Send</button>
                  </form>          
                </div>
              </div>
              <div className="window-module">
                <ListComment memberId = {this.props.state.boards.board.memberId}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}


AddComment.propTypes = {
  handleClosePopupComment: PropTypes.func.isRequired,
  addCommentItem: PropTypes.func.isRequired
}

export default AddComment