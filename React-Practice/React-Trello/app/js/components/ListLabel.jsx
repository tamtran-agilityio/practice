import React, {PropTypes, Component } from 'react';
import Label from '../containers/Label';

class ListLabel extends Component {
  constructor(props){
    super(props);
  }

  onSelecteLabel(direction) {
    console.log("AAAA", direction);
    this.onSelecteLabel(dirction);
  }

  render() {
    return (
      <ul className="list-label">
        { 
          this.props.labels.map(label =>
          <Label
            key = {label.labelId}
            {...label}
            onClick={() => onSelecteLabel(label.labelId)}
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
  onSelecteLabel: PropTypes.func.isRequired
}

export default ListLabel