import {connect} from 'react-redux';
import LogicPuzzle from '../components/LogicPuzzle';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogicPuzzle: (logicPuzzle) => {
      dispatch({type: 'LOGICPUZZLE', logicPuzzle});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogicPuzzle);