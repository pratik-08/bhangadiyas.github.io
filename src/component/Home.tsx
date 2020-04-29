import React, { Component } from 'react';

class Home extends Component {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='home'>
        <h1>Welcome to our family tree website</h1>
        <p> Feel free to browse around and learn more about us.</p>
      </div>
    );
  }
}


export { Home };
