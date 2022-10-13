import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    console.log({ username, password });
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
          type='text'
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
