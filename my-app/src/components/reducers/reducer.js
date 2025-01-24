const initialState = {
	inTask: '',
	outTask: [],
	error: null,
	refresh: false,
	ind: '',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'x':
			return initialState;
		default:
			return state;
	}
};
