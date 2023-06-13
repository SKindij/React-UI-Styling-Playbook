import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContainerSample.scss';



function ContainerSample() {
  return (
    <div>
      <Container>
        <Row >
          <Col className='custom-row'>some information in simple-Container</Col>
          <Col className='custom-row'>some information in simple-Container</Col>
        </Row>
        <Row >
          <Col className='custom-row'>another information in simple-Container</Col>
          <Col className='custom-row'>central data block in simple-Container</Col>
          <Col className='custom-row'>another information in simple-Container</Col>
        </Row>     
      </Container>
      <Container fluid="md">
        <Row >
          <Col className="bg-info border">some information in fluid-Container</Col>
          <Col className="bg-info border">some information in fluid-Container</Col>
          </Row>
        <Row >
          <Col className="bg-info border">another information in fluid-Container</Col>
          <Col className="bg-info border">central data block in fluid-Container</Col>
          <Col className="bg-info border">another information in fluid-Container</Col>
        </Row>     
      </Container>
      <Container>
        <Row >
          <Col xs={12} md={9} xl={6} className='custom-row'>content: xs=12 md=9 xl=6</Col>
          <Col xs={12} md={9} xl={6} className='custom-row'>content: xs=12 md=9 xl=6</Col>
        </Row>
        <Row className='my-4'>
          <Col xs={11} md={8} xl={5} className='custom-row'>content: xs=11 md=8 xl=5</Col>
          <Col xs={10} md={7} xl={4} className='custom-row'>content: xs=10 md=7 xl=4</Col>
          <Col xs={9} md={6} xl={3} className='custom-row'>content: xs=9 md=6 xl=3</Col>
        </Row>   
        <Row>
          <Col xs={8} md={5} xl={2} className='custom-row'>content: xs=8 md=5 xl=2</Col>
          <Col xs={8} md={5} xl={2} className='custom-row'>content: xs=8 md=5 xl=2</Col>
          <Col xs={8} md={5} xl={2} className='custom-row'>content: xs=8 md=5 xl=2</Col>
        </Row>    
      </Container>
    </div>

  );
}

export default ContainerSample;
