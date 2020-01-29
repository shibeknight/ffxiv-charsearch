import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <header>Header goes here</header>
        <div>
          <main>{children}</main>
        </div>
      </div>
    );
  }
}


export default Layout;
