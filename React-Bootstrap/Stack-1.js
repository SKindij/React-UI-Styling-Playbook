import React from 'react';
import { Container, Stack, Button, Form }from 'react-bootstrap';

function StackSample() {
  return (
    <Container>     
      <Stack gap={2} className="mt-4">
        <div className="bg-warning border">First Vertical content item</div>
        <div className="bg-warning border">Second Vertical content item</div>
        <div className="bg-warning border">Third Vertical content item</div>
      </Stack>             

      <Stack direction="horizontal" gap={3} className="mt-4">
        <div className="bg-warning border">First Horizontal content item</div>
        <div className="ms-auto bg-warning border">Second Horizontal content item</div>
        <div className="vr" />
        <div className="bg-warning border">Third Horizontal content item</div>
      </Stack>

      <Stack gap={2} className="mt-4 col-md-5 mx-auto">
        <Button variant="outline-secondary">First Vertical Button</Button>
        <Button variant="secondary">Second Vertical Button</Button>
        <Button variant="outline-secondary">Third Vertical Button</Button>
      </Stack>

      <Stack direction="horizontal" gap={3} className="mt-5">
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Submit</Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
    </Stack>
    
    </Container>
  );
}

export default StackSample;
