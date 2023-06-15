import React from 'react';
import { Container, Form, InputGroup, FloatingLabel } from 'react-bootstrap';

function Sample() {
  const formGroupStyle = {
    width: '50%',
    background: 'LemonChiffon',
  };

  return (
    <div>
     <Container className="mt-4" style={formGroupStyle}>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
     </Container>

     <Container className="mt-4" style={formGroupStyle}>      
      <FloatingLabel controlId="floatingInput"
        label="user name" className="mb-3" >
        <Form.Control type="text" placeholder="User name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" 
        label="Password" >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>    
      </Container>
    
     <Container className="mt-4" style={formGroupStyle}>
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One item</option>
        <option value="2">Two item</option>
        <option value="3">Three item</option>
      </Form.Select>
      </FloatingLabel>
    </Container>
    </div>

  );
}

export default Sample;
