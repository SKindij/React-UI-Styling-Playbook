import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContainerSample.scss';



function ContainerSample() {
  return (
    <div>
      <Container>
        <Row>
          <Col className='custom-row'>some information in simple-Container</Col>
          <Col className='custom-row'>some information in simple-Container</Col>
        </Row>
        <Row>
          <Col className='custom-row'>another information in simple-Container</Col>
          <Col className='custom-row'>another information in simple-Container</Col>
        </Row>     
      </Container>
      <Container fluid="md">
        <Row>
          <Col className="bg-info border">some information in fluid-Container</Col>
          <Col className="bg-info border">some information in fluid-Container</Col>
          </Row>
        <Row>
          <Col className="bg-info border">another information in fluid-Container</Col>
          <Col className="bg-info border">another information in fluid-Container</Col>
        </Row>     
      </Container>
    </div>

  );
}

export default ContainerSample;
