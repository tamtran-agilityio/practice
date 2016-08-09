import React, { PropTypes, Component } from 'react';
import ListLabel from '../containers/ListLabel';

class AddLabel extends Component{
  constructor(props){
    super(props);
  }

  hidePopupLabel(direction) {
    this.props.hidePopupLabel(direction);
  }

  render() {
    let labelShow = !this.props.state.rootReducer.label.showAddLabel ? '': 'show-pop-over';
    let css = `${labelShow} pop-over`;
    return (
      <div className={css}>
        <div className="pop-over-header">
          <div className="pop-over-header-title">Labels</div>
          <a href="javascript:void(0)"
            onClick={this.hidePopupLabel.bind(this, false)}
            className="close">X</a>
        </div>
        <div className="pop-over-content">
          <input className="label-search"
            placeholder="Search label"
          />
          <ListLabel />
        </div>
      </div>
    );
  }
}


AddLabel.propTypes = {
  hidePopupLabel: PropTypes.func.isRequired
}

export default AddLabel
