import {FETCH_BUILDS_START, FETCH_BUILDS_SUCCESS, FETCH_BUILDS_ERROR} from '../actions/actionTypes';

const initialState = {
	items: [],
	loading: false,
	error: null,
};

export default function quizReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_BUILDS_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_BUILDS_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.builds,
			};
		case FETCH_BUILDS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
