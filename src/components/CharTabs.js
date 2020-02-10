import React from 'react';
import { Tab, Container, Grid, Segment, Image } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Jobs',
    render: () => (
      <Tab.Pane attached={false}>
        <Container>
          <Grid stackable columns={3}>
            <Grid.Column>
              <Segment>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
            </Grid.Column>
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

const CharTabs = () => {
  return <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />;
};

export default CharTabs;
