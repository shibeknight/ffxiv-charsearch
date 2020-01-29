import React, { Component } from 'react';
import { Grid, Header, Button, Segment, Image, Form } from 'semantic-ui-react';

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
                <Form.Input fluid icon="user" iconPosition="left" placeholder="Character name" />
                <Button color="teal" fluid size="large">
                  Search
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
