import React from 'react'
import { render } from 'react-dom'

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {date: new Date()}
	}

	componentDidMount() {
		//渲染到DOM
		// for (let i = 0; i < 1000; i++ ) {
		// 	if ( (i % 1 === 0) && (i % 2 === 1) && (i % 3 === 0) && (i % 4 === 1) && (i % 5 === 4) && (i % 6 === 3) && (i % 7 === 0) && (i % 8 === 1) && (i % 9 === 0) ) {
		// 		console.log('结果', i)
		// 	}
		// }
		this.timerID = setInterval(
			() => this.tick(),
			10000
		)
	}

	componentWillUnMount() {
		//组件卸载
		clearInterval(this.timerID)
	}
	tick() {
		this.setState({
			date: new Date()
		})
	}


	render() {
		return (<div>
			<h1>Hello,world!</h1>
			<h2>It is {this.state.date.toLocaleTimeString()}</h2>
		</div>)
	}
}

render(
	<Clock/>,
	document.getElementById('stateAndLifeCycle')
)


/*
function Clock (props) {
	return (
		<div>
			<h1>hello,world</h1>
			<h2>现在是{props.date.toLocaleTimeString()}</h2>
		</div>
		)
}

function tick() {
	render(
		<Clock date={new Date()}/>,
		document.getElementById('stateAndLifeCycle')
		)
}

setInterval(tick, 1000)
*/

