import React  from 'react'
import './stylesheets/Clock.css'
import Timer from 'react-clock'

class Clock extends React.Component {

	render () {
		return (
			<div className="card clock">
				<Timer/>
			</div>
		);
	}
}

export default Clock;

