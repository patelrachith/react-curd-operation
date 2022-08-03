import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </>
    );
  }
}

export default Header;
