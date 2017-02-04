export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGICPUZZLE': {
      return {type: 'logicPuzzle', definition: action.logicPuzzle};
    }
  }
  return state;
}