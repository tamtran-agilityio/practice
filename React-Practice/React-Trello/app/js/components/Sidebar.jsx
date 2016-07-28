import React, {PropTypes, Component} from 'react';

class Siderbar extends Component {
  constructor(props) {
    super(props);
  }

  onClickPopupLabel(direction) {
    this.props.onClickPopupLabel(direction);
  }

  render() {
    return (
      <div className="window-sidebar">
        <div className="window-module">
          <h3 className="sidebar-module-title"> Add </h3>
          <div>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Member
            </a>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Labels
            </a>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Checklist
            </a>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Due day
            </a>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Attachment
            </a>
          </div>
        </div>
        <div className="window-module">
          <h3 className="sidebar-module-title"> Actions </h3>
          <div>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Move
            </a>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Copy
            </a>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Subscribe
            </a>
            <a href="javascript:void(0)" className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Archive
            </a>
          </div>
        </div>
      </div>
    )
  }
}

Siderbar.propTypes = {
  onClickPopupLabel: PropTypes.func
}

export default Siderbar