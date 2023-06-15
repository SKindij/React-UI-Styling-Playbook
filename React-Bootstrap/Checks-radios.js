import React from 'react';
import { Container, Form } from 'react-bootstrap';

function Sample() {
  const formGroupStyle = {
    width: '50%',
    background: 'LemonChiffon',
  };

  return (
    <div>
      <Container className="mt-4" style={formGroupStyle}>
        <Form.Select size="lg">
          <option>Large select</option>
        </Form.Select>
          <br />
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
          <br />
        <Form.Select size="sm">
          <option>Small select</option>
        </Form.Select>
      </Container>

      <Container className="mt-4" style={formGroupStyle}>
        <Form>
          {['checkbox', 'radio'].map( (type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type} id={`default-${type}`}
                label={`default ${type}`}
              />
              <Form.Check disabled
                type={type} label={`disabled ${type}`}
                id={`disabled-default-${type}`}
              />
            </div>
          ) )}
        </Form>
      </Container>
    
      <Container className="mt-4" style={formGroupStyle}>
        <Form>
          <Form.Check // prettier-ignore
            type="switch" id="custom-switch"
            label="Check this switch"
          />
          <Form.Check disabled // prettier-ignore
            type="switch" label="disabled switch"
            id="disabled-custom-switch"
          />
        </Form>
      </Container>

      <Container className="mt-4" style={formGroupStyle}>
        <Form>
        {['checkbox', 'radio'].map( (type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline
              label="101"  name="group101"
              type={type} id={`inline-${type}-101`}
            />
            <Form.Check inline
              label="102" name="group102"
              type={type} id={`inline-${type}-102`}
            />
            <Form.Check inline disabled
              label="103 (disabled)" type={type}
              id={`inline-${type}-103`}
            />
          </div>
        ) )}
        </Form>
      </Container>

      <Container className="mt-4" style={formGroupStyle}>
      <Form>
      {['checkbox', 'radio'].map( (type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ) )}
    </Form>
      </Container>
    </div>

  );
}

export default Sample;
