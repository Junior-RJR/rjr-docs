import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Alteração aqui
import '../css/Login.css';
import logo from '../images/RJR-Branco.png';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Alteração aqui

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login === 'junior' && password === 'rogeriojunior') {
      navigate('/home'); // Alteração aqui
    } else {
      setError('Login ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="RJR Logo" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={handleLoginChange}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
          <button type="submit" className="login-button">Entrar</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
