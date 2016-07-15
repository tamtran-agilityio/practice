import React from 'react';
import {Link} from 'react-router';


export default class Contact extends React.Component {
  render(){
    return(
      <div>
        Contact
        <Link to="/contact">Click Me!</Link>
      </div>
    )
  }
}