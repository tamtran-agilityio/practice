import React, {PropTypes, Component} from 'react';

class Label extends Component {
  constructor(props) {
    super(props);
  }

  selectLabel(event) {
    event.preventDefault();
    this.props.selectLabel(this.props.labelId);
  }

  render() {
    let colorStyle = {background: `${this.props.labelColor}`};
    return (
      <li key={this.props.labelId}>
        <a href="javascript:void(0)"
          onClick={this.selectLabel.bind(this)}
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