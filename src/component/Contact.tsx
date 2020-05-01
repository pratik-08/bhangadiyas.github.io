import React, { Component } from 'react';

class Contact extends Component {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className='contact'>
          <h1>Contact Me</h1>
          <p>You can reach me via email: <strong>pratikagrawal2008@gmail.com</strong></p>
          <h2>Remote Link</h2>
          <a
            className="App-link"
            href="https://pratik-08.github.io/bhangadiyas.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bhangadiya's Family Tree
        </a>
        </div>
      </div>
    );
  }
}


export { Contact };
