import React from 'react';
import Image from './Image.jsx'
import Popup from './Popup.jsx'

// const venicePic = require('../../images/venice.jpg');

// const veniceImg = document.getElementById('home');
// veniceImg.src = veniceIcon;

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "",
            value: [],

        }
        this.handleGetLocation = this.handleGetLocation.bind(this)
        this.handleDtla = this.handleDtla.bind(this)
    }
    handleGetLocation() {
        console.log("hello")
        fetch('http://localhost:3000/venice', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        }).then((data) => {
            return data.json();
        }).then(data => {

            this.setState({
                location: data
            })
            // console.log(data)
        })
    }
    handleDtla() {
        console.log("hello")
        fetch('http://localhost:3000/dtla', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        }).then((data) => {
            return data.json();
        }).then(data => {

            this.setState({
                location: data
            })
            // console.log(data)
        })
    }

    render() {
        return (
            // <h1> Bliss </h1>
            <div>
                <h1>DELISH</h1>

                <Image handleGetlocation={this.handleGetLocation} handleDtla={this.handleDtla} />
                <Popup location={this.state.location} />



            </div>
        )
    }
}

export default App;