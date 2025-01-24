const initialState = {
	inTask: '',
	outTask: [],
	error: null,
	refresh: false,
	ind: '',
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_ERROR':
			return {
				...state,
				error: payload,
			};
		case 'SET_IN_TASK':
			return {
				...state,
				inTask: payload,
			};
		case 'SET_OUT_TASK':
			return {
				...state,
				outTask: payload,
			};
		case 'SET_IND':
			return {
				...state,
				ind: payload,
			};
		case 'RESET':
			return initialState;
		default:
			return state;
	}
};
