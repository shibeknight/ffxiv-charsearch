import React, { Component } from 'react';
import { Grid, Header, Button, Segment, Image, Form, Message } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: '450px' }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="https://react.semantic-ui.com/logo.png" /> Log-in to your account
            </Header>
            <Form size="large">
              <Segment>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="noref">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
