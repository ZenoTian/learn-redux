import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
	static propTypes = {
		value: PropTypes.number.isRequired, //isRequired必须
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.func.isRequired
	}

	incrementIfOdd = () => {
		if (this.props.value %2 !== 0) {
			this.props.onIncrement()
		}
	}

	incrementAsync = () => {
		setTimeout(this.props.onIncrement, 1000)
	}

	render() {
		const {value, onIncrement, onDecrement } = this.props
		return(
			<p>
				点击：{value} 次数
				{' '}
				<button onClick={onIncrement}> + </button>
				{' '}
				<button onClick={onDecrement}> - </button>
				{' '}
				<button onClick={this.incrementIfOdd}> + </button>
				{' '}
				<button onClick={this.incrementAsync}> + </button>
			</p>
		)
	}
}