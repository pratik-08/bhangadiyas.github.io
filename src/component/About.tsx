import React, { Component } from 'react';

interface State {
  x: string,
  y: string
}

interface Props {
}

class About extends React.Component<Props, State> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      x: "I am Pratik",
      y: "I am Shikha"
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='about'>
        <h1>About Me</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      </div>
    );
  }
}


export { About };
