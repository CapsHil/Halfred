import React from 'react';
import OpenWeather from 'openweather-apis'
import './stylesheets/Weather.css'
import ReactAnimatedWeather from 'react-animated-weather'

class Weather extends React.Component {

	constructor(props) {
		super(props);
		this.state = {temp: '', 'dsc': ''};
		this.getWeatherData = this.getWeatherData.bind(this);
	}

	getWeatherData() {
		OpenWeather.setLang('fr');
		OpenWeather.setCity('Paris');
		OpenWeather.setUnits('metric');
		OpenWeather.setAPPID('59f6ee8fc58d73946a76f9053c575bbc');
		// OpenWeather.getSmartJSON(function(err, JSONObj) {
		// 	console.log(JSONObj.temp);
		// 	this.setState({
		// 		temp: JSONObj.temp,
		// 		desc: JSONObj.description
		// 	});
		// });
	}

	render() {

		const defaults = {
			icon: 'CLEAR_DAY',
			color: 'goldenrod',
			size: 80,
			animate: true
		};

		this.getWeatherData();

		return (
			<div className="weather card">
				<div className="weather-container">
					<h2 className="weather-title">Today :</h2>
					<ReactAnimatedWeather
						icon={defaults.icon}
						color={defaults.color}
						size={defaults.size}
						animate={defaults.animate}
						className="weather-icon"
					/>
					<div className="weather-infos">
						<p>{ this.state.desc }<br />Temp: { this.state.temp }</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Weather;