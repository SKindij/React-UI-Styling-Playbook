import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

function FormSample() {
  const formGroupStyle = {
    width: '70%',
    background: 'LemonChiffon',
  };

  return (
    <div>
      <Container className="mt-4">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={formGroupStyle}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={formGroupStyle}>
          <Form.Label column sm="2">Email</Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" style={formGroupStyle}>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control type="password" id="inputPassword5" 
            placeholder="Enter your password" aria-describedby="passwordHelpBlock" />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={formGroupStyle}>
          <Form.Label>Change size of the input.</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Large text" />
            <br />
          <Form.Control type="text" placeholder="Normal text" />
            <br />
         <Form.Control size="sm" type="text" placeholder="Small text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={formGroupStyle}>
          <Form.Label>Disabled input</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>
        <Form.Group className="mb-3" style={formGroupStyle}>
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select disabled><option>Disabled select</option></Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" style={formGroupStyle}>
          <Form.Check type="checkbox" label="Can't check this" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={formGroupStyle}>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox" style={formGroupStyle}>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </Container >

      <Container className="mt-4">
        <Form.Label htmlFor="colorInput">Color picker</Form.Label>
        <Form.Control type="color" id="colorInput"
           defaultValue="#563d7c" title="Choose your color" />
      </Container>

      <Container className="mt-4">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group controlId="formFileDisabled" className="mb-3">
          <Form.Label>Disabled file input example</Form.Label>
          <Form.Control type="file" disabled />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Small file input example</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>
      </Container>
    </div>

  );
}

export default FormSample;
