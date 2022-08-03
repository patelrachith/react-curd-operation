import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'World!',
      mode: 0,
    };
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  changeState() {
    if (this.state.mode === 0) {
      this.setState({ hello: 'Rachit!', mode: 1 });
    } else {
      this.setState({ hello: 'Patel!', mode: 1 });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate()');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }
}

export default Test;
