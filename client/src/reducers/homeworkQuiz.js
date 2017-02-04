export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOMEWORK_QUIZ': {
      console.log(action.id)
    }
  }

  return state;
}