export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOMEWORK_QUIZ': {
      const quizzes = state;
      quizzes.push(action.id);
      return quizzes;
    }
  }

  return state;
}