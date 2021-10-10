import {
	FETCH_BUILDS_START,
	FETCH_BUILDS_SUCCESS,
	FETCH_BUILDS_ERROR,
	RUN_BUILD_START,
	RUN_BUILD_SUCCESS,
	RUN_BUILD_ERROR,
} from '../actions/actionTypes';

const initialState = {
	items: [],
	repository: null,
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
				repository: action.repository,
			};
		case FETCH_BUILDS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case RUN_BUILD_START:
			return {
				...state,
				loading: true,
			};
		case RUN_BUILD_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case RUN_BUILD_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
