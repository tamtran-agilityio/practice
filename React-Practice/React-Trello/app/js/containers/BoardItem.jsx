import { connect } from 'react-redux'
import { startBoard, showPopup } from '../actions/BoardAction'
import BoardList from '../components/BoardList'

const getBoad = (boards) => {
  return boards
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    boards: getBoad(state.boards)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardClick: (id) => {
      dispatch(startBoard(id))
    },
    onClickShowPopup: () => {
      dispatch(showPopup())
    }
  }
}

const BoardItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardList)

export default BoardItem