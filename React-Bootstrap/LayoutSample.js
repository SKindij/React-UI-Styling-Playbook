import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Button, InputGroup } from 'react-bootstrap';

function LayoutSample() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const formGroupStyle = {
    width: '90%',
    padding: '20px',
    background: 'LemonChiffon',
  };

  return (
    <div style={containerStyle}>
    <Container className="mt-4" style={formGroupStyle}>
      {/* Вміст першого контейнера */}
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Works with selects"
        >
          <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
    </Container>

    <Container className="mt-4" style={formGroupStyle}>      
      {/* Вміст другого контейнера */}
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>User</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Nickname" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    </Container>
    
    <Container className="mt-4" style={formGroupStyle}>
      {/* Вміст третього контейнера */}
      <h4>Login for registered users</h4>
      <p>Provides access to professional functions on the portal.</p>
      <Form>
      <Row className="align-items-center">
      <Col sm={3} className="my-1">
          <Form.Label htmlFor="formInputUsername" visuallyHidden>
            Username
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>User:</InputGroup.Text>
            <Form.Control id="formInputUsername"
              placeholder="nickname" />
          </InputGroup>
        </Col>
        <Col sm={3} className="my-1">
          <Form.Label htmlFor="formInputUserPassworde" visuallyHidden>
            Password:
          </Form.Label>
            <Form.Control id="formInputUserPassword"
              placeholder="Password" />
        </Col>
        <Col xs="auto" className="my-1">
          <Form.Check type="checkbox"
            id="autoSizingCheck2" label="Remember me" />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">Enter</Button>
        </Col>
      </Row>
    </Form>
    </Container>
    </div>

  );
}

export default LayoutSample;
