import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  HelpBlock,
  Row,
  Col,
  Grid,
  Button,
} from 'react-bootstrap';

const Login = (props) => {
  const {
    username,
    handleChange,
    handleSubmit,
    error,
  } = props;

  return (
    <Grid>
      <h3 className="text-center u-m-b-lg">
        Velkommen!
      </h3>
      <Row>
        <Col xs={6} xsOffset={3}>
          <form>
            <FormGroup validationState={error && 'error'}>
              <FormControl
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
              />
              {
                error &&
                <HelpBlock>
                  Please enter a username
                </HelpBlock>
              }
            </FormGroup>
            <FormGroup>
              <Button onClick={handleSubmit} block>
                Login
              </Button>
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Login;