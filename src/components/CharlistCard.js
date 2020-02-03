import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Header, Image, Button, Icon } from 'semantic-ui-react';

const CharlistCard = props => {
  const { characters, handleReturn } = props;
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
      <Header as="h2" color="teal" textAlign="center" style={{ paddingTop: '1.5vh' }}>
        <Image src="https://react.semantic-ui.com/logo.png" /> Select your character
      </Header>
      {characters.map(item => (
        <Card key={item.ID} style={{ minHeight: '60px', margin: '0', width: '95%' }}>
          <Card.Content>
            <Image floated="right" size="mini" src={item.Avatar} />
            <Card.Header>
              <NavLink to={{ pathname: '/', state: item.ID }}>{item.Name}</NavLink>
            </Card.Header>
            <Card.Meta>{item.Server}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
      <Button
        onClick={handleReturn}
        color="teal"
        style={{ minHeight: '3em', width: '75%', marginTop: '1vh', marginBottom: '1vh' }}
      >
        <Icon name="arrow left" />
      </Button>
    </Card>
  );
};

CharlistCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  characters: PropTypes.array.isRequired,
  handleReturn: PropTypes.func.isRequired,
};

export default CharlistCard;
