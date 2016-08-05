import { connect } from 'react-redux';
import { } from '../actions/Action';
import Label from '../components/Label';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectLabel: (direction) => {
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Label)