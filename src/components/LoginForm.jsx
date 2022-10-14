import React, { useState } from 'react';
import auth from '../api/auth';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    auth
      .login(username, password)
      .then((response) => {
        localStorage.setItem('x-auth-token', response.headers['x-auth-token']);
        navigate('/');
      })
      .catch((error) => setErrorMessage(error.response.data));
  };

  return (
    <div className='form'>
      <h1 className='section-title'>Login</h1>
      <div className='inputs-container'>
        <input
          type='text'
          placeholder='Username...'
          className='form-control'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type='password'
          placeholder='Password...'
          className='form-control'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        {errorMessage && (
          <div className='alert alert-danger'>{errorMessage}</div>
        )}

        <button
          type='submit'
          className='btn btn-primary btn-lg'
          onClick={handleLogin}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
