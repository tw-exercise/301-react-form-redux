export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HOMEWORK_QUIZ': {
      return {type: 'homeworkQuiz', definition: {quizzes: action.quizzes}};
    }
    case 'DELETE_HOMEWORK_QUIZ': {
      return {};
    }
  }

  return state;
}