const initialState = {
	inTask: '',
	error: null,
	ind: '',
};

export const reducerB = (state = initialState, { type, payload }) => {
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
		case 'SET_IND':
			return {
				...state,
				ind: payload,
			};
		default:
			return state;
	}
};
