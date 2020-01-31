import React from 'react';
import PropTypes from 'prop-types';
import { Card, Header, Form, Image, Segment, Button } from 'semantic-ui-react';

const LoginCard = props => {
  const { handleSubmit, searchValue, handleSearchChange } = props;
  return (
    <Card style={{ width: 'inherit', minHeight: '300px', justifyContent: 'space-evenly' }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src="https://react.semantic-ui.com/logo.png" /> Search for your character
      </Header>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment style={{ border: 'none', boxShadow: 'none' }}>
          <Form.Input
            value={searchValue}
            onChange={handleSearchChange}
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Character name"
          />
          <Button type="submit" color="teal" fluid size="large">
            Search
          </Button>
        </Segment>
      </Form>
    </Card>
  );
};

LoginCard.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default LoginCard;
