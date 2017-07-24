import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';

const Footer = (props) => {
  return (
      <Row className="app-footer">
        <Col xs={12} xsOffset={0} sm={11} smOffset={1}>
          <span>
            FireChat
          </span>
          &nbsp;|&nbsp;
          <span>
            Blake Guilloud
          </span>
        </Col>

      </Row>
  );
};

export default Footer;