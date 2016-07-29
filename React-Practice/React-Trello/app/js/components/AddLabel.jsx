import React, { PropTypes, Component } from 'react';

class AddLabel extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="pop-over">
        <div className="pop-over-header">
          <div className="pop-over-header-title">Labels</div>
          <a href="javascript:void(0)" className="close">X</a>
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

}

export default AddLabel
