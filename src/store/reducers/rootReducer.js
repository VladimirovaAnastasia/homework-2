import {combineReducers} from 'redux';
import settingsReducer from './settings';
import buildsReducer from './builds';

export default combineReducers({
	settings: settingsReducer,
	builds: buildsReducer,
});
