import axios from 'axios';

export const increase = () => ({type: 'ADD'});

export const decrease = () => ({type: 'SUBTRACT'});


export const setUser = (user) => ({
	type: 'SET_USER',
	user: user
});


export const readUser = (userId) => (dispatch) => {
	dispatch(increase());
   axios.get('https://api.github.com/users/'+userId)
      .then(result => dispatch(setUser(result.data)))
};