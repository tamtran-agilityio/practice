import React, {PropTypes, Component} from 'react';
import AddLabel from '../containers/AddLabel';
class Siderbar extends Component {
  constructor(props) {
    super(props);
  }

  onClickPopupLabel(event) {
    event.preventDefault();
    this.props.onClickPopupLabel(event);
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
            <a href="javascript:void(0)"
              onClick={this.onClickPopupLabel.bind(this)}
              className="button-link">
              <i className="fa fa-user" aria-hidden="true"></i>
              Labels
            </a>
            <AddLabel state={this.props.state}/>
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
  onClickPopupLabel: PropTypes.func.isRequired
}

export default Siderbar