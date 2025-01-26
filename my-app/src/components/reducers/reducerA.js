const initialState = {
	outTask: [],
};

export const reducerA = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_OUT_TASK':
			return {
				...state,
				outTask: payload,
			};

		default:
			return state;
	}
};
