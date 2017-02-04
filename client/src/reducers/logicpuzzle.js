export default (state={easy:'',normal:'',hard:''},action)=>{
  switch (action.type){
    case 'LOGICPUZZLE':{
      return action.logicPuzzle;
    }
  }
  return state;
}