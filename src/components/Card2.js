import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Card2 extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.data.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.data.drinkStrDrink}</Card.Title>
            <Card.Text>{this.props.data.idDrink}</Card.Text>
            <Button
              onClick={() => this.props.deleteDrink(this.props.idx)}
              variant="primary"
            >
              Delete
            </Button>
            <Button
              onClick={() => this.props.updateFunction(this.props.idx)}
              variant="primary"
            >
             Update
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Card2;
