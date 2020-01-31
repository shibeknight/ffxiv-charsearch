import React from 'react';
import PropTypes from 'prop-types';
import { Card, Header, Image } from 'semantic-ui-react';

const CharlistCard = props => {
  const { characters } = props;
  return (
    <Card
      style={{
        width: 'inherit',
        minHeight: '300px',
        maxHeight: '350px',
        overflow: 'auto',
        alignItems: 'center',
      }}
    >
      <Header as="h2" color="teal" textAlign="center">
        <Image src="https://react.semantic-ui.com/logo.png" /> Select your character
      </Header>
      {characters.map(item => (
        <Card key={item.ID} style={{ minHeight: '60px', margin: '0', width: '95%' }}>
          <Card.Content>
            <Image floated="right" size="mini" src={item.Avatar} />
            <Card.Header>{item.Name}</Card.Header>
            <Card.Meta>{item.Server}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card>
  );
};

CharlistCard.propTypes = {
  characters: PropTypes.arrayOf.isRequired,
};

export default CharlistCard;
