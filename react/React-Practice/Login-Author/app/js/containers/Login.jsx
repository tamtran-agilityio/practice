import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as FbActions from '../actions/facebook';

function mapStateToProps(state) {
  console.log("SSSSSAAAAA", state);
  return {
    login: state.pvlogin
  }
}

function mapDispatchToProps(dispatch) {

  return  {
    handleLogin: (direction) => {
      dispatch(FbActions.login());
    }
  }
  // bindActionCreators(FbActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);