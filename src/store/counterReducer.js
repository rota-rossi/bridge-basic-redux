const initialState = {
	counter: 0,
};



const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD':
			// do something
			return {
				...state,
				counter: state.counter + 1
			};
		case 'SUBTRACT':
			// do something
			return {
				...state,
				counter: state.counter - 1
			};
		default: 
			return state;
	}
};

export default reducer