import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <header>
          <Header />
        </header>
        <div>
          <main>{children}</main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
