import PaperInfo from '../components/PaperInfo';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPaperInfo: (paperInfo) => {
      dispatch({type: 'PAPERINFO', paperInfo})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperInfo);