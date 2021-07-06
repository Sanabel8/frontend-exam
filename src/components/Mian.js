import React, { Component } from 'react'
import axios from 'axios';
import Card1 from './Card1';

export class Mian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url=process.env.REACT_APP_SERVER_URL,
            drinks:[],
            showDrink:false
        }
    }

    componentDidMount = async () => {
        const request = await axios.get(`${this.state.url}/getData`)
        this.setState({
            drinks:drinks.data,
            showDrink:true
        })
    }
    AddToFav = async () => {
        await axios.post(`${this.state.url}/createDrink`)
    }
    render() {
        return (
            <div>
                {this.state.showDrink &&
                    this.state.drinks.map((data, idx) => {
                        <Card1
                        data = { data }
                        idx = { idx }
                        AddToFav={this.AddToFav}
                        />
                })
                }
            </div>
        )
    }
}

export default Mian
