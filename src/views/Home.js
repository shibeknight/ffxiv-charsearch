import React, { Component } from 'react';
import { Grid, Segment, Image, Header, Container, Card, Icon, Loader } from 'semantic-ui-react';
import api from '../utils/API';

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
    const char = await api.charInfo('730968');
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
            <Card fluid>
              <Image src={charInfo.Portrait} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{charInfo.Name}</Card.Header>
                <Card.Meta>{charInfo.ActiveClassJob.Class.Name}</Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="noref">
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
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

export default Home;
