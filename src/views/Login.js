import React, { Component } from 'react';
import { Grid, Header, Button, Segment, Image, Form, Loader, Feed, Card } from 'semantic-ui-react';
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
      isLoading: false,
      isReady: false,
    };
  }

  searchItems = async value => {
    console.log(value);
    const chars = await api.searchChars(value);
    console.log(chars);
    this.setState({
      items: chars.data.Results,
      isLoading: false,
      isReady: true,
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
    const { items, active, pages, isLoading, searchValue, isReady } = this.state;
    let section;
    if (isLoading) {
      section = (
        <Card style={{ width: 'inherit', minHeight: '300px', justifyContent: 'center' }}>
          <Loader active size="massive" content="Loading..." />
        </Card>
      );
    } else if (isReady) {
      section = (
        <>
          <Card
            style={{
              width: 'inherit',
              minHeight: '300px',
              maxHeight: '350px',
              overflow: 'auto',
              alignItems: 'center',
            }}
          >
            <Header as="h2" color="teal" textAlign="center">
              <Image src="https://react.semantic-ui.com/logo.png" /> Select your character
            </Header>
            {items.map(item => (
              <Card key={item.ID} style={{ minHeight: '60px', margin: '0', width: '95%' }}>
                <Card.Content>
                  <Image floated="right" size="mini" src={item.Avatar} />
                  <Card.Header>{item.Name}</Card.Header>
                  <Card.Meta>{item.Server}</Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card>
        </>
      );
    } else {
      section = (
        <>
          <Card style={{ width: 'inherit', minHeight: '300px', justifyContent: 'space-evenly' }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="https://react.semantic-ui.com/logo.png" /> Search for your character
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment style={{ border: 'none', boxShadow: 'none' }}>
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
          </Card>
        </>
      );
    }

    return (
      <div>
        <Grid
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid.Column style={{ maxWidth: '450px', maxHeight: '450px' }}>{section}</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
