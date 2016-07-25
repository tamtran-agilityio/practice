import { connect } from 'react-redux'
import { startBoard, showPopup } from '../actions/BoardAction'
import BoardListDetails from '../components/BoardListDetails'

const getBoad = (boards) => {
  boards = JSON.parse(localStorage.getItem('board') || '[]');
  return boards
}

const mapDispatchToProps = (dispatch) => {
  
}

const BoardListDetaisl = connect(
  getBoad,
  mapDispatchToProps
)(BoardListDetails)

export default BoardListDetails