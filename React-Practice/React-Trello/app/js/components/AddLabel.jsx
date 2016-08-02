import React, { PropTypes, Component } from 'react';

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
          <ul className="list-labels">
            <li>
              <a href="javascript:void(0)" className="edit-label"></a>
              <div className="card-label card-label-green"></div>
            </li>
            <li>
              <a href="javascript:void(0)" className="edit-label"></a>
              <div className="card-label card-label-yellow"></div>
            </li>
            <li>
              <a href="javascript:void(0)" className="edit-label"></a>
              <div className="card-label card-label-yellow"></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


AddLabel.propTypes = {
  hidePopupLabel: PropTypes.func.isRequired
}

export default AddLabel
