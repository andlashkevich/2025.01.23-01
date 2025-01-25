const initialState = {
	inTask: '',
	error: null,
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
		default:
			return state;
	}
};
