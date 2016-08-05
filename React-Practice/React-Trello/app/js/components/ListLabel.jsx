import React, {PropTypes, Component } from 'react';
import Label from '../containers/Label';

class ListLabel extends Component {
  constructor(props){
    super(props);
  }

  onClickLabel(direction) {
  }

  render() {
    return (
      <ul className="list-label">
        { 
          this.props.labels.map(label =>
          <Label
            key = {label.labelId}
            {...label}
            onClick={() => selectLabel(label.labelId)}
          />)
        }
      </ul>
    )
  }
}

ListLabel.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape({
    labelId: PropTypes.number.isRequired,
    labelColor: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectLabel: PropTypes.func.isRequired
}

export default ListLabel