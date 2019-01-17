import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogout, GoogleLogin }  from 'react-google-login';


class App extends Component {
  
  render() {
    const clientId = '137123896081-1iqj8jamg1f9inm8qbhvahrdvbmt60eq.apps.googleusercontent.com'

  const success = response => {
    console.log(response) // eslint-disable-line
  }

  const error = response => {
    console.error(response) // eslint-disable-line
  }

  const loading = () => {
    console.log('loading') // eslint-disable-line
  }

  const logout = () => {
    console.log('logout') // eslint-disable-line
  }
    return (
      <div className="App">
      <div>
      <GoogleLogin
        clientId={clientId}
        scope="https://www.googleapis.com/auth/analytics"
        onSuccess={success}
        onFailure={error}
        onRequest={loading}
        offline={false}
        approvalPrompt="force"
        responseType="id_token"
        isSignedIn
        theme="dark"
        // disabled
        // prompt="consent"
        // className='button'
        // style={{ color: 'red' }}
      >
        <span>Analytics</span>
      </GoogleLogin>
      <br />
      <br />
      <GoogleLogin
        clientId={clientId}
        scope="https://www.googleapis.com/auth/adwords"
        onSuccess={success}
        onFailure={error}
        onRequest={loading}
        approvalPrompt="force"
        responseType="code"
        // uxMode="redirect"
        // redirectUri="http://google.com"
        // disabled
        // prompt="consent"
        // className='button'
        // style={{ color: 'red' }}
      >
        <span>Adwords</span>
      </GoogleLogin>
      <br />
      <br />
      <GoogleLogin onSuccess={success} onFailure={error} clientId={clientId} />
      <br />
      <br />
      <GoogleLogin theme="dark" onSuccess={success} onFailure={error} clientId={clientId} />
      <br />
      <br />
      <GoogleLogin theme="dark" style={{ background: 'blue' }} onSuccess={success} onFailure={error} clientId={clientId} />
      <br />
      <br />
      <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
    </div>
      </div>
    );
  }
}

export default App;
