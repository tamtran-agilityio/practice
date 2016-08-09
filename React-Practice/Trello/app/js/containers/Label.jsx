import { connect } from 'react-redux';
import { selectLabel } from '../actions/Action';
import Label from '../components/Label';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectLabel: (direction) => {
      dispatch(selectLabel(direction));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label)