import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Card, Image } from 'semantic-ui-react';

const JobGrid = props => {
  const { charInfo } = props;
  return (
    <Container>
      <Grid stackable columns={3}>
        {charInfo.ClassJobs.map(item => (
          <Grid.Column key={item.Job.ID} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src={`https://xivapi.com${item.Job.Icon}`} />
                <Card.Header style={{ textTransform: 'capitalize' }}>{item.Job.Name}</Card.Header>
                <Card.Meta>{item.Level}</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

JobGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  charInfo: PropTypes.object.isRequired,
};

export default JobGrid;
