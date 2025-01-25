const initialState = {
	outTask: [],
	ind: '',
};

export const reducerA = (state = initialState, { type, payload }) => {
	switch (type) {
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
		default:
			return state;
	}
};
