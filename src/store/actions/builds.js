import axios from 'axios';
import {
	FETCH_BUILDS_START,
	FETCH_BUILDS_SUCCESS,
	FETCH_BUILDS_ERROR,
	RUN_BUILD_START,
	RUN_BUILD_SUCCESS,
	RUN_BUILD_ERROR,
} from './actionTypes';

export const fetchBuilds = () => {
	return async (dispatch, getState) => {
		dispatch(fetchBuildsStart());
		try {
			const response = await axios.post('http://localhost:5000/builds', getState().settings);
			const {builds, repository} = response.data;

			dispatch(fetchBuildsSuccess(builds, repository));
		} catch (e) {
			dispatch(fetchBuildsError(e));
		}
	};
};

export const runBuild = (hash) => {
	return async (dispatch) => {
		dispatch(runBuildStart());
		try {
			await axios.post('http://localhost:5000/build', {hash: hash});
			dispatch(runBuildSuccess());
		} catch (e) {
			dispatch(runBuildError(e));
		}
	};
};

export function runBuildStart() {
	return {
		type: RUN_BUILD_START,
	};
}

export function runBuildSuccess(builds) {
	return {
		type: RUN_BUILD_SUCCESS,
		builds,
	};
}

export function runBuildError(e) {
	return {
		type: RUN_BUILD_ERROR,
		error: e,
	};
}

export function fetchBuildsStart() {
	return {
		type: FETCH_BUILDS_START,
	};
}

export function fetchBuildsSuccess(builds, repository) {
	return {
		type: FETCH_BUILDS_SUCCESS,
		builds,
		repository,
	};
}

export function fetchBuildsError(e) {
	return {
		type: FETCH_BUILDS_ERROR,
		error: e,
	};
}
