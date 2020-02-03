import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Container, Loader, Segment, Image } from 'semantic-ui-react';
import api from '../utils/API';
import CharMainGrid from '../components/CharMainGrid';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charInfo: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadChar();
  }

  loadChar = async () => {
    const { location } = this.props;
    const char = await api.charInfo(location.state);
    console.log(char);
    this.setState({
      charInfo: char.data.Character,
      isLoading: false,
    });
  };

  render() {
    const { charInfo, isLoading } = this.state;
    let section;
    if (isLoading) {
      section = (
        <Grid.Column mobile={16} tablet={16} computer={16} style={{ height: '50vh' }}>
          <Loader active size="massive" content="Loading..." />{' '}
        </Grid.Column>
      );
    } else {
      section = (
        <>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <CharMainGrid charInfo={charInfo} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <Segment>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
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
    state: PropTypes.string.isRequired,
  }),
};

Home.defaultProps = {
  location: {
    pathname: '',
  },
};

export default Home;
