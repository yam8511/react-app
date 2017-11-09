import React, { Component } from 'react';

class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  tick() {
    this.setState((prevState) => {
      console.log('上一個 State', prevState)
      return {
        seconds: prevState.seconds + 1
      }
    });
  }

  componentDidMount() {
    console.log('已經掛載', this.state, this.props)
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <h1>
        Hello {this.props.name} (Staying: {this.state.seconds} s)
      </h1>
    );
  }
}

export default HelloMessage;
