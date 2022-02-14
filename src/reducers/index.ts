import { combineReducers } from 'redux';
import universities from './universities';

/*
 * Responsible for combining all reducers inside of app
 */
export default combineReducers({
  universities,
});
