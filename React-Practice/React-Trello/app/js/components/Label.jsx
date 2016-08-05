import React, {PropTypes, Component} from 'react';

class Label extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let colorStyle = {background: `${this.props.labelColor}`};
    return (
      <li>
        <a href="javascript:void(0)"
          onClick={this.selectLabel}
          className="edit-label">
          <div className="card-label"
            style={colorStyle}
            ></div>
        </a>
      </li>
    )
  }
}
Label.propTypes = {
  selectLabel: PropTypes.func.isRequired
}

export default Label