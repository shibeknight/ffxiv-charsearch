import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const CharMainGrid = props => {
  const { charInfo } = props;
  return (
    <Card fluid>
      <Image src={charInfo.Portrait} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{charInfo.Name}</Card.Header>
        <Card.Meta style={{ textTransform: 'capitalize' }}>
          {charInfo.ActiveClassJob.Job.Name}
        </Card.Meta>
        <Card.Description>{charInfo.Server}</Card.Description>
      </Card.Content>
      <Card.Content extra>{charInfo.Title.Name}</Card.Content>
    </Card>
  );
};

CharMainGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  charInfo: PropTypes.object.isRequired,
};

export default CharMainGrid;
