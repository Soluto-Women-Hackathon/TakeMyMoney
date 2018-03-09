import React, { Component } from 'react';
import './App.css';

export default class Pig extends Component {
    constructor() {
        super();
        this.state = {
            roll : window.location.href.includes("#!roll")
        }
    }

    componentWillMount() {
        let t = setTimeout(() => this.setState({moveCoin: true}), 200)
    }

    render() {
        return (
        <div className="pig">
            <img className="ear" src="https://i.imgur.com/7q5Z9DS.png"/>
            <img className="body" src="https://i.imgur.com/r5LDd3i.png"/>
            <img className={`coin ${this.state.moveCoin ? "move" : ""}`} src="https://i.imgur.com/bOiT8Ju.png"/>
            <div className="message pig-text">Thank you, kind human! we got your dollar</div>
        </div>
        );
    }
}
