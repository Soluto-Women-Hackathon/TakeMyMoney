import React, { Component } from 'react';
import Pay from "./pay";
import Wheel from "./wheel";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="headline">
              <span className="take">Take</span>
              <span className="my">My</span>
              <span className="money">Money</span>
          </div>
          <div className="sub-headline">
              Your dollar can save the world
          </div>
          <div className="why-donate">
              What can you buy for $1? A slice of pizza 🍕, a song 🎶, An app 📱, a cup of coffee ☕️, a can of soup.
              Or you can donate that dollar to make a change in the world 🌎.
          </div>
          <div className="why-donate">
              Take My Money is a platform for anyone with a big heart to donate just $1 to one of thousands of interesting, international non-profit organizations. Let our Wheel of Giving™ decide where to send that dolla bill 💸.
          </div>
          <Pay/>
          <Wheel/>
      </div>
    );
  }
}

export default App;
