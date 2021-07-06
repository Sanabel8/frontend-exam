import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={e =>this.props.UpdateForm(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Drinks Name" value={this.props.drinkStrDrink}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Img</Form.Label>
            <Form.Control type="text" placeholder="Drinks Img" value={this.props.drinkStrDrinkThumb}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Id</Form.Label>
            <Form.Control type="number" placeholder="Drinks Id" value={this.props.drinkIdDrink}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
