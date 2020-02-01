import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image, Segment } from 'semantic-ui-react';

const CharMainGrid = props => {
  const { charInfo } = props;
  return (
    <>
      <Grid.Column mobile={16} tablet={6} computer={6}>
        <Card fluid>
          <Image src={charInfo.Portrait} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{charInfo.Name}</Card.Header>
            <Card.Meta>{charInfo.ActiveClassJob.Class.Name}</Card.Meta>
            <Card.Description>Character title and Server</Card.Description>
          </Card.Content>
          <Card.Content extra>{charInfo.Title.Name}</Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={10}>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Grid.Column>
    </>
  );
};

CharMainGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  charInfo: PropTypes.object.isRequired,
};

export default CharMainGrid;
