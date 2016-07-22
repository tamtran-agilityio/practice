import HeaderPage from '../containers/HeaderPage';
import React, {PropTypes, Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        {this.props.children}
     </div>
    );
  }
}

export default App
