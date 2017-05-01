import React from 'react'
import './stylesheets/VoiceAssistant.css'
import { BACK_END_PORT, BACK_END_URL} from '../Properties';

class VoiceAssistant extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://'+BACK_END_URL+':'+BACK_END_PORT+'/api/say', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				say: 'TEST'
			})
		})
	}

	render() {
		return (
			<div className="voice-assistant card">
				<h2>Voice Assistant</h2>
				<form onSubmit={this.handleSubmit}>
					<input className="voice-input" type="text" onChange={this.handleChange} placeholder="What do you want to say ?"/>
					<br />
					<input className="voice-button" type="submit" value="Say !"/>
				</form>
			</div>
		);
	}
}

export default VoiceAssistant;