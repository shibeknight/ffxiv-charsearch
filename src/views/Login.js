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
      section = <Loader active size="massive" content="Loading..." />;
    } else if (isReady) {
      section = (
        <Feed size="large">
          {items.map(character => (
            <Feed.Event>
              <Feed.Label>
                <img
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  alt="profile"
                />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>{character.Name}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      );
    } else {
      section = (
        <>
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
          <Grid.Column style={{ maxWidth: '450px', maxHeight: '450px', overflow: 'auto' }}>
            <Card
              raised
              style={{ width: 'inherit', minHeight: '300px', justifyContent: 'space-evenly' }}
            >
              {section}
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
