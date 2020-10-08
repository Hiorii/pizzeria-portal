import React from 'react';
import {Link} from 'react-router-dom';
import './Login.module.scss';

const Login = () => {
  return (
    <div className='.component'>
      <h2>Login view</h2>
      <Link to='/'>Dashboard</Link>
    </div>
  );
};

export default Login;
