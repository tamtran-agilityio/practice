import { connect } from 'react-redux';
import { editCard } from '../actions/Action';
import Card from '../components/Card';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (ownProps, direction) => {
      console.log("SSSSSSSSSAAAAAAAAAA", ownProps, direction);
      dispatch(editCard(ownProps, direction))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
