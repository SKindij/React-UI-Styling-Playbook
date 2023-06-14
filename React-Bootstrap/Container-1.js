import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ContainerSample.scss';



function ContainerSample() {
  return (
    <div>
      <Container fluid="md">
        <Row className="mt-4">
          <Col className="bg-info border">some information in fluid-Container</Col>
          <Col className="bg-info border">some information in fluid-Container</Col>
          </Row>
        <Row className="mb-4">
          <Col className="bg-info border">another information in fluid-Container</Col>
          <Col className="bg-info border">central data block in fluid-Container</Col>
          <Col className="bg-info border">another information in fluid-Container</Col>
        </Row>     
      </Container>
      <Container>
        <Row>
          <Col xs={10} md={7} xl={4} className='custom-col'>
            content: xs=10 (83.33%), md=7 (58.33%), xl=4 (33.33%)
          </Col>
          <Col xs={{ span: 10, offset: 2 }} md={{ span: 7, offset: 2 }} xl={{ span: 4, offset: 2 }} className='custom-col'>
            content: xs=10 md=7 xl=4 & offset=2
          </Col>
          <Col xs={9} md={6} xl={3} className='custom-col'>content: xs=9 md=6 xl=3</Col>
        </Row>   
        <Row>
          <Col xs={8} md={5} xl={2} className='custom-col'>content: xs=8 md=5 xl=2</Col>
          <Col xs={8} md={5} xl={2} className='custom-col'>content: xs=8 md=5 xl=2</Col>
          <Col xs={8} md={5} xl={2} className='custom-col'>content: xs=8 md=5 xl=2</Col>
          <Col>
        </Col>
        </Row>    
      </Container>
    </div>

  );
}

export default ContainerSample;
