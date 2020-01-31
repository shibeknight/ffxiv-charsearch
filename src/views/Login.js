import React, { Component } from 'react';
import { Grid, Loader, Pagination, Card, Container } from 'semantic-ui-react';
import api from '../utils/API';
import LoginCard from '../components/LoginCard';
import CharlistCard from '../components/CharlistCard';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      active: 1,
      pages: '',
      searchValue: '',
      isLoading: false,
      isReady: false,
    };
  }

  searchItems = async value => {
    const { active } = this.state;
    const chars = await api.searchChars(value, active);
    console.log(chars);
    this.setState({
      items: chars.data.Results,
      isLoading: false,
      isReady: true,
      pages: chars.data.Pagination.PageTotal,
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

  handlePaginationChange = async (e, { activePage }) => {
    this.setState({ active: activePage, isLoading: true });
    const { searchValue, active } = this.state;
    const chars = await api.searchChars(searchValue, active);
    console.log(chars);
    this.setState({
      items: chars.data.Results,
      isLoading: false,
      isReady: true,
      pages: chars.data.Pagination.PageTotal,
    });

    // this.searchItems(searchValue);
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
          <CharlistCard characters={items} />
          <Pagination
            pointing
            secondary
            activePage={active}
            totalPages={pages}
            onPageChange={this.handlePaginationChange}
          />
        </>
      );
    } else {
      section = (
        <>
          <LoginCard
            handleSubmit={this.handleSubmit}
            searchValue={searchValue}
            handleSearchChange={this.handleSearchChange}
          />
        </>
      );
    }

    return (
      <Container>
        <Grid
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid.Column
            style={{
              maxWidth: '450px',
              maxHeight: '450px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {section}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Login;
