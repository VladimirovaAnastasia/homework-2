import {SET_SETTINGS} from '../actions/actionTypes';

const initialState = {
	repository: null,
	branch: null,
	command: null,
	minutes: 10,
};

export default function createReducer(state = initialState, action) {
	switch (action.type) {
		case SET_SETTINGS:
			return {
				...state,
				repository: action.settings.repository,
				branch: action.settings.branch,
				command: action.settings.command,
				minutes: action.settings.minutes,
			};
		default:
			return state;
	}
}
