export default (state = {}, action) => {
  switch (action.type) {
    case 'SAVE': {
      console.log(action.paper)
      return state;
    }
    case 'CANCEL': {
      return state;
    }
  }

  return state;
}