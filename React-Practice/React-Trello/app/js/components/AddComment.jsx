import React, { PropTypes, Component } from 'react';
import ListComment from '../containers/ListComment';
import Sidebar from '../containers/Sidebar';

class AddComment extends Component{
  constructor(props){
    super(props);
    this.addCommentItem = this.addCommentItem.bind(this);
    // this.props.state.rootReducer.comment.showCreateComment = false;
  }

  addCommentItem(event) {
    event.preventDefault();
    const keyword = this.refs.keyword.value;
    if (!keyword.trim()) {
      return 
    }
    this.props.addCommentItem(this.props.state.rootReducer.member.memberId, keyword);
    this.refs.keyword.value ='';
  }

  handleClosePopupComment(direction) {
    this.props.handleClosePopupComment(direction);
  }

  render() {
    return (
      <div>
        <div className={this.props.state.rootReducer.comment.showCreateComment ? 'window-overlay' : 'window-overlay-hide' }>
        <div className="window-comment">
          <a key="close" className="close" onClick={this.handleClosePopupComment.bind(this, false)}>X</a>
          <div className="comment-detail-window">
            <div className="window-header">
              <span className="window-module-title-icon">
                <i className="fa fa-credit-card" aria-hidden="true"></i>
              </span>
              <div className="window-title">
                <h2 className="card-detail-title">Create Board </h2>
              </div>
            </div>
            <div className="window-main">
              <div className="window-module">
              </div>
              <div className="window-module">
                <span className="window-module-title-icon">
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                </span>
                <div className="window-module-title">Add Comment</div>
                <div className="new-comment">
                  <form onSubmit={this.addCommentItem}>
                    <textarea
                      type="text"
                      className="input-comment"
                      placeholder="Write a comment…"
                      ref="keyword"
                      />
                    <button className="create-comment" type="submit">Send</button>
                  </form>          
                </div>
              </div>
              <div className="window-module">
                <span className="window-module-title-icon">
                  <i className="fa fa-list" aria-hidden="true"></i>
                </span>
                <div className="window-module-title">Activity</div>         
                <div className="list-actions">
                  <ListComment memberId = {this.props.state.rootReducer.member.memberId}/>
                </div>
              </div>
            </div>
            <Sidebar/>
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