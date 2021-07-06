import axios from 'axios';
import React, { Component } from 'react'
import Card2 from './Card2'
import UpdateForm from './UpdateForm'

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url=process.env.REACT_APP_SERVER_URL,
            drinks:[],
            showDrink: false,

            showForm:false,
            index: 0,
            drinkStrDrink: '',
            drinkStrDrinkThumb: '',
            drinkIdDrink:''
            
        }
    }
    componentDidMount = async () => {
        const drinks = await axios.get(`${this.state.url}/getDrink`)
        this.setState({
            drinks:drinks.data,
            showDrink:true
        })
    }
    deleteDrink = async (idx) => {
        const id = this.state.drinks[idx]._id
        const drinks = await axios.delete(`${this.state.url}/deleteDrink/${id}`)
        this.setState({
            drinks:drinks.data

        })
    }
    UpdateForm = (idx) => {
        const chosenDrink = this.state.drinks[this.state.index]
        this.setState({
            showForm:true,
            index: idx,
            drinkStrDrink:chosenDrink.drinkStrDrink,
            drinkStrDrinkThumb: chosenDrink.drinkStrDrinkThumb,
            drinkIdDrink:chosenDrink.drinkIdDrink
        })
    }
    updateStrDrink =(e =>this.setState({drinkStrDrink:e.target.value}))
    updateStrDrinkThumb =(e =>this.setState({drinkStrDrinkThumb:e.target.value}))
    updateIdDrinkate=(e =>this.setState({drinkIdDrink:e.target.value}))
    
    updateFunction = async (e) => {
        e.preventDefault();
        const id = this.state.drinks[this.state.index]._id
        const chosenData = {
            drinkStrDrink=this.state.drinkStrDrink,
            drinkStrDrinkThumb =this.state.drinkStrDrinkThumb,
            drinkIdDrink=this.state.drinkIdDrink
        }
        let chosenDrink = await axios.put(`${this.state.url}/updateDrink/${id}`, chosenData)
        this.setState({
            chosenDrink:chosenDrink.data
        })
   }
    render() {
        return (
            <div>
                {this.state.showForm &&
               
                    <UpdateForm
                        updateStrDrink={this.updateStrDrink}
                        updateStrDrinkThumb={this.updateStrDrinkThumb}
                        updateIdDrinkate={this.updateIdDrinkate}

                        drinkStrDrink={this.state.drinkStrDrink}
                        drinkStrDrinkThumb={this.state.drinkStrDrinkThumb}
                        drinkIdDrink={this.state.drinkIdDrink}

                        updateFunction={this.updateFunction}
                    />
                }
                    {this.state.showDrink && 
                    this.state.drinks.map((data, idx) => {
                        return (
                            
                            <Card2
                            data = { data }
                            idx = { idx }
                            deleteDrink = {this.deleteDrink }
                            UpdateForm={this.UpdateForm}
                            />
                        )
                        
                    })
                 }
               
            </div>
        )
    }
}

export default Favorite
