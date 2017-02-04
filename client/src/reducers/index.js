import {combineReducers} from 'redux';
import paperInfo from './paperInfo';
import logicPuzzle from './logicpuzzle';
import homeworkQuiz from './homeworkQuiz';

const rootReducer = combineReducers({paperInfo, logicPuzzle, homeworkQuiz});

export default rootReducer;
