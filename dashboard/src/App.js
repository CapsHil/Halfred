import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import Plugs from './components/Plugs'
import Weather from "./components/Weather";
import VoiceAssistant from "./components/VoiceAssistant";
import Clock from "./components/Clock";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Halfred's Dashboard</h2>
        </div>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <div className="card-container">
            <Plugs/>
            <Weather/>
            <VoiceAssistant/>
            <Clock />
        </div>

      </div>
    );
  }
}

export default App;
