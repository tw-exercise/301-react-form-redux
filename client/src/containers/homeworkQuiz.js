import {connect} from 'react-redux';
import HomeworkQuiz from '../components/HomeworkQuiz';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeworkQuiz: (quizzes) => {
      dispatch({type: 'ADD_HOMEWORK_QUIZ', quizzes});
    },
    deleteHomeworkQuiz: () => {
      dispatch({type: 'DELETE_HOMEWORK_QUIZ'});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkQuiz);
