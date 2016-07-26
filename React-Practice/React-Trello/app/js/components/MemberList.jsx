import React, {PropTypes, Component } from 'react';
import Member from '../containers/Member';

class MemberList extends Component {
  constructor(props){
    super(props);
  }

  onClickMember(direction) {
  }

  render() {
    return (
      <ul className="list-member">
        { 
          this.props.members.map(member =>
          <Member
            key = {member.memberId}
            {...member}
            onClick={() => onClickMember(member.memberId)}
          />)
        }
      </ul>
    )
  }
}

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    memberId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClickMember: PropTypes.func.isRequired
}

export default MemberList