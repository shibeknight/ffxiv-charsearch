import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Menu stackable>
        <Menu.Item style={{ flexGrow: '1' }}>
          <img src="https://react.semantic-ui.com/logo.png" alt="placeholder" />
        </Menu.Item>
        <Menu.Item name="home" link as={Link} to="/home">
          Home
        </Menu.Item>
        <Menu.Item name="sign-in" link as={Link} to="/">
          Search
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
