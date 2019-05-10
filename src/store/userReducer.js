const initialState = {
	user: null,
};

const reducer = (state = initialState, action) => {
	switch(action) {
		case 'SET_USER':
		return {
			...state,
			user: action.user,
		};
	default: 
		return state;
	}
}

export default reducer;