import {combineReducers} from 'redux';
import paperInfo from './paperInfo';
import logicPuzzle from './logicpuzzle';

const rootReducer = combineReducers({paperInfo, logicPuzzle});

export default rootReducer;
