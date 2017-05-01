import React from 'react'
import './stylesheets/VoiceAssistant.css'

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
		var myRequest = new Request('http://localhost:8081/api/say', {method: 'POST', body: '{"say":"TEST"}'});
		fetch(myRequest)
			.then(function(response) {
				if(response.status === 200) return response.json();
				else throw new Error('Something went wrong on api server!');
			})
			.then(function(response) {
				console.debug(response);
				// ...
			})
			.catch(function(error) {
				console.error(error);
			});

		// fetch('http://localhost:8081/api/say', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		say: event.target.value
		// 	})
		// });
		// console.log('Post request to API');
	}

	render() {
		return (
			<div className="voice-assistant card">
				<h2>Voice Assistant</h2>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange}/>
					<br />
					<input type="submit" value="Say !"/>
				</form>
			</div>
		);
	}
}

export default VoiceAssistant;