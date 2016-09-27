import React from 'react';
import 'whatwg-fetch';
import JsonTable from 'react-json-table'
const timer = require('react-native-timer');


class Race extends React.Component {

    constructor(props) {
        super(props);
        this.state = { coins: {}, count: 0 };
        this.startRace = this.startRace.bind(this)
        this.stopRace = this.stopRace.bind(this)
        this.tick = this.tick.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    componentDidMount() {
        this.updateData()
        this.setState({columns: [{key: 'long', label: 'Name'},{key: 'price', label: 'Price'},{key: 'volume', label: 'Volume'}]})
    }

    updateData(){
        fetch('/api/coins').then(function (response) {
            console.log(response)
            // return response.json();
        }).then(function (json) {
            // const coins = []
            // for (var i = 0; i < 10; i++) {
            //     console.log(json[i])
            //     coins.push(json[ i ])
            // }
            // this.setState({ coins: coins });
        }.bind(this))
    }

    tick(){
        this.updateData()
        this.state.count = this.state.count + 30000
        console.log(this.state.count)
    }

    componentWillUnmount() {
        timer.clearInterval(this);
    }

    startRace(){
        timer.setInterval(this, 'startRace', () =>  this.tick(), 30000)
    }

    stopRace(){
        timer.clearInterval(this);
    }

    render() {
       // console.log('state',this.state);

        return (
            <div>
                <JsonTable
                    rows={this.state.coins}
                    columns={this.state.columns }/>

                <button onClick={this.startRace}>Start Race</button>
                <button onClick={this.stopRace}>Stop Race</button>
            </div>
        );
    }

}

export default Race;