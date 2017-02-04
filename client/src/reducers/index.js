import {combineReducers} from 'redux';
import paperInfo from './paperInfo';
import logicPuzzle from './logicpuzzle';
import homeworkQuiz from './homeworkQuiz';
import body from './body';

const rootReducer = combineReducers({paperInfo, logicPuzzle, homeworkQuiz, body});

export default rootReducer;
