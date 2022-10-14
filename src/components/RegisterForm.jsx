import React, { useState } from 'react';
import auth from '../api/auth';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword)
      return setErrorMessage('Passwords must match.');

    auth
      .register(username, password)
      .then((response) => {
        localStorage.setItem('x-auth-token', response.headers['x-auth-token']);
        navigate('/');
      })
      .catch((error) => setErrorMessage(error.response.data));
  };

  return (
    <div className='form'>
      <h1 className='section-title'>Register</h1>
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

        <input
          type='text'
          placeholder='Confirm password...'
          className='form-control'
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />

        {errorMessage && (
          <div className='alert alert-danger'>{errorMessage}</div>
        )}

        <button
          type='submit'
          className='btn btn-primary btn-lg'
          onClick={handleRegister}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
