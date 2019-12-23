import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewFanficPage extends Component {
  render() {
    return (
      <div className="container">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Title:</Label>
            <Col sm={10}>
              <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={2}>Fanfik text:</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleFile" sm={2}>Loading file:</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Choose and insert the file.
          </FormText>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col lg={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}


export default NewFanficPage;
