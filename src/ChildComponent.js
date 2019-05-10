import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increase, decrease, readUser} from './store/actions';


class ChildComponent extends Component {

	componentDidMount() {
		// this.props.dispatch(increase());
		this.props.readUser('rota-rossi');
	}

	render() {
		const userName = this.props.user ? this.props.user.name : 'NO USER YET';
		return (
			<div>
				<h2>ChildComponent</h2>
				<button onClick={this.props.increase}>Increase</button>
				<button onClick={this.props.decrease}>decrease</button>
				</div>
			)
	}

};

const mapStateToProps = (state) => ({
	counter: state.counter,
	user: state.user,
});

const mapDispatchToPros = {
	increase: increase,
	decrease: decrease,
	readUser: readUser
}

export default connect(mapStateToProps, mapDispatchToPros)(ChildComponent);