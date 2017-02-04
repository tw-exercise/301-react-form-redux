export default (state = {name: '', description: ''}, action) => {
  switch (action.type) {
    case 'PAPERINFO': {
      return {
        name: action.paperInfo.name,
        description: action.paperInfo.description
      };
    }
  }

  return state;
}