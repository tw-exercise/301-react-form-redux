import {connect} from 'react-redux';
import HomeworkQuiz from '../components/HomeworkQuiz';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeworkQuiz: (id) => {
      dispatch({type: 'ADD_HOMEWORK_QUIZ', id});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkQuiz);
