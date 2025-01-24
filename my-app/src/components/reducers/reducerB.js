const initialState = {};

export const reducerB = (state, action) => {
	switch (action.type) {
		case 'x':
			return initialState;
		default:
			return state;
	}
};
