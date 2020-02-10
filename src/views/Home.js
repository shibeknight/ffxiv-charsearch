import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Container, Loader } from 'semantic-ui-react';
import api from '../utils/API';
import CharMainGrid from '../components/CharMainGrid';
import CharTabs from '../components/CharTabs';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charInfo: [],
      isLoading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.loadChar();
  }

  loadChar = async () => {
    const { location } = this.props;
    try {
      const char = await api.charInfo(location.state);
      this.setState({
        charInfo: char.data.Character,
        isLoading: false,
      });
    } catch (ex) {
      this.setState({
        isLoading: false,
        error: true,
      });
    }
  };

  render() {
    const { error, charInfo, isLoading } = this.state;
    let section;
    if (isLoading) {
      section = (
        <Grid.Column mobile={16} tablet={16} computer={16} style={{ height: '50vh' }}>
          <Loader active size="massive" content="Loading..." />{' '}
        </Grid.Column>
      );
    } else if (error) {
      section = (
        <Grid.Column
          mobile={16}
          tablet={16}
          computer={16}
          style={{ height: '50vh', display: 'flex', justifyContent: 'center' }}
        >
          <Header as="h2" color="teal">
            Something bad happened... Go back to the search and look for your character!
          </Header>
        </Grid.Column>
      );
    } else {
      section = (
        <>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <CharMainGrid charInfo={charInfo} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <CharTabs charInfo={charInfo} />
          </Grid.Column>
        </>
      );
    }

    return (
      <Container>
        <Header as="h2" color="teal">
          Character Home
        </Header>
        <Grid stackable columns={2}>
          {section}
        </Grid>
      </Container>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.number.isRequired,
  }),
};

Home.defaultProps = {
  location: {
    pathname: '',
  },
};

export default Home;
