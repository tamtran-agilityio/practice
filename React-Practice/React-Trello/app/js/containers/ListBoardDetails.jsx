import { connect } from 'react-redux'
import { startBoard, showPopup } from '../actions/BoardAction'
import ListBoardDetails from '../components/ListBoardDetails'

const getBoad = (boards) => {
  boards = JSON.parse(localStorage.getItem('board') || '[]');
  return boards
}

const mapStateToProps = (state) => {
  return {
    state,
    boards
  }
}

const mapDispatchToProps = (dispatch) => {
  
}

const ListBoardDetaisl = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBoardDetails)

export default ListBoardDetails