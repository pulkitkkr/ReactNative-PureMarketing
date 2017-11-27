import loginScreenReducer from './loginScreenReducer';
import {combineReducers} from 'redux';
let allReducers = combineReducers({loginScreenReducer:loginScreenReducer});
export default allReducers;