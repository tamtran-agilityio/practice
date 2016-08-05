import { connect } from 'react-redux';
import { } from '../actions/Action';
import ListLabel from '../components/ListLabel';

const getLabels = () => {
  let labels =JSON.parse(localStorage.getItem("label") || '[]');
  return labels
}

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    labels: getLabels()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelecteLabel: (direction) => {
      console.log("SASSSSS", direction);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLabel)