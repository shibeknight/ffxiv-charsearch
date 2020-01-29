import React, { Component } from 'react';
import { Grid, Header, Button, Segment, Image, Form } from 'semantic-ui-react';
import api from '../utils/API';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      active: 1,
      itemsTotal: '',
      pages: '',
      searchValue: '',
      isLoading: true,
    };
  }

  searchItems = async value => {
    const chars = await api.searchChars(value);
    console.log(chars);
    this.setState({
      items: chars.data.results,
      itemsTotal: chars.data.count,
      isLoading: false,
    });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ searchValue: value });
  };

  handleSubmit = () => {
    const { searchValue } = this.state;
    this.setState({ isLoading: true });
    this.searchItems(searchValue);
  };

  render() {
    const { items, active, pages, isLoading, searchValue } = this.state;

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
              <Image src="https://react.semantic-ui.com/logo.png" /> Search for your character
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment>
                <Form.Input
                  value={searchValue}
                  onChange={this.handleSearchChange}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Character name"
                />
                <Button type="submit" color="teal" fluid size="large">
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
