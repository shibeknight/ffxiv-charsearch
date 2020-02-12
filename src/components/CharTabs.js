import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Container, Grid, Image, Header, Card } from 'semantic-ui-react';

const CharTabs = props => {
  const { charInfo } = props;
  const panes = [
    {
      menuItem: 'Jobs',
      render: () => (
        <Tab.Pane attached={false} style={{ maxHeight: '630px', overflow: 'auto' }}>
          <Header as="h2" color="teal">
            Job Details
          </Header>
          <Container>
            <Grid stackable columns={3}>
              {charInfo.ClassJobs.map(item => (
                <Grid.Column
                  key={item.Job.ID}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Card>
                    <Card.Content>
                      <Image
                        floated="right"
                        size="mini"
                        src={`https://xivapi.com${item.Job.Icon}`}
                      />
                      <Card.Header>{item.Job.Name}</Card.Header>
                      <Card.Meta>{item.Level}</Card.Meta>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid>
          </Container>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Free Company',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Minions/Mounts',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ];
  return <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />;
};

CharTabs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  charInfo: PropTypes.object.isRequired,
};

export default CharTabs;
