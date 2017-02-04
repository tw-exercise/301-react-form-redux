import Body from '../components/Body';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    savePaper: (paper) => {
      dispatch({type: 'SAVE', paper})
    },
    cancelPaper:(paper)=>{
      dispatch({type: 'CANCEL', paper});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);