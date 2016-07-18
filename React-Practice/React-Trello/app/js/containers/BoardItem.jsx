import { connect } from 'react-redux'
import { startBoard } from '../actions/BoardAction'
import BoardList from '../components/BoardList'

const getBoad = (boards) => {
  return boards
}

const mapStateToProps = (state) => {
  return {
    boards: getBoad(state.boards)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardClick: (id) => {
      dispatch(startBoard(id))
    }
  }
}

const BoardItem = connect(
  getBoad,
  mapDispatchToProps
)(BoardList)

export default BoardItem