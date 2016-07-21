import { connect } from 'react-redux'
import { startBoard, showPopup } from '../actions/BoardAction'
import BoardListDetaisls from '../components/BoardListDetaisls'

const getBoad = (boards) => {
  boards = JSON.parse(localStorage.getItem('board') || '[]');
  return boards
}

const mapDispatchToProps = (dispatch) => {
  
}

const BoardListDetaisl = connect(
  getBoad,
  mapDispatchToProps
)(BoardListDetaisls)

export default BoardListDetaisl