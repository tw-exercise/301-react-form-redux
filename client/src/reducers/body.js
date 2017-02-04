export default (state={}, action) =>
{
  switch (action.type) {
    case 'SAVE': {
      return state;
    }
    case 'CANCEL': {
      return state;
    }
  }

  return state;
}