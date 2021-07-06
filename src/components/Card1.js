import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class Card1 extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.data.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.data.strDrink}</Card.Title>
            <Card.Text>
             {this.props.data.idDrink}
            </Card.Text>
            <Button onClick={()=>this.props.AddToFav(this.props.drinks)} variant="primary">Add To Favorite List</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Card1;
