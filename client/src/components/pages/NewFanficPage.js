import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewFanficPage extends Component {
  state = {
    title: '',
    fanficText: '',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2f%2FNilgiri%252C_Bandarban.JPG&f=1&nofb=1'
  }

  onChange(e) {
    
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  createFanfic(){
    const fanfic = {...this.state}
    this.props.update(fanfic)
  };
  render() {
    const { title, img, fanficText } = this.state;

   
    return (
      <div className="container">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Title:</Label>
            <Col sm={10}>
              <Input type="text" name="title" value={title} id="exampleEmail" placeholder="with a placeholder" onChange={this.onChange.bind(this)}/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={2}>Fanfik text:</Label>
            <Col sm={10}>
              <Input type="textarea" value={fanficText} name="fanficText" id="exampleText" onChange={this.onChange.bind(this)} />
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
              <Button onClick={this.createFanfic.bind(this)}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}


export default NewFanficPage;
