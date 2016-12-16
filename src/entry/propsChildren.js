import React from 'react'
import { render } from 'react-dom'

function ListOfTenThings() {
	return (
		<Repeat numTimes={10}>
			{(index) => <div key={index}> 这是列表第{index}项</div>}
		</Repeat>
	)
}

function Repeat(props) {
	let items = []
	for (let i = 0; i < props.numTimes; i++) {
		items.push(props.children(i))
	}
	return <div>{items}</div>
}

render(
	<ListOfTenThings/>,
	document.getElementById('propsChildren')
)
