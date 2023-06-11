import React from 'react';
import '../assets/scss/auth.scss';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="login">    
      <LoginForm/>
    </div>
  );
}

export default Login;
