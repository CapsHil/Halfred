import React from 'react'
import './stylesheets/PresenceDetector.css'
import { BACK_END_PORT, BACK_END_URL} from '../Properties';

class PresenceDetector extends React.Component {

	constructor(props) {
		super(props);
		this.state = {date: ""};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		getLastDate().then(function(result) {
			console.log(result);
			this.state.date = result;
			console.log(this.state.date);
			this.forceUpdate()
			// Promise.resolve(result).then(function(valeur) {
			// 	this.setState({date: valeur}); // "Succès"
			// }, function(valeur) {
			// 	this.setState({date: valeur});
			// });
			// this.setState({date: result});
			// console.log(this.state.date);
		});
		//this.setState({date: getLastDate().value});
		// this.setState({date: "TEST"});
	}
	componentDidMount() {
		setInterval(this.handleChange, 10000);
	}

	render() {
		return (
			<div className="card presence-detector">
				<h2>Presence Detector</h2>
				<p>{this.state.date}</p>
			</div>
		);
	}
}

async function getLastDate() {
	try {
		let response = await fetch('http://'+BACK_END_URL+':'+BACK_END_PORT+'/api/lastPresence');
		let date = await response.json();
		//console.log(date.date);
		return date.date;
	} catch(error) {
		console.error(error);
	}
}

export default PresenceDetector;