import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
//import { Authenticator, Greetings } from 'aws-amplify-react';

import { Auth } from 'aws-amplify'

/* 
<Authenticator hideDefault={true}>
<Greetings
    inGreeting={() => 'Welcome'}
    outGreeting="Please sign in..."
/>
</Authenticator> 
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  async componentDidMount() {
    debugger
    const user = await Auth.currentAuthenticatedUser()
    console.log('user info:', user.signInUserSession.idToken.payload)
    console.log('username:', user.username)
  }
}

export default withAuthenticator(App, { includeGreetings: true })
//export default App;