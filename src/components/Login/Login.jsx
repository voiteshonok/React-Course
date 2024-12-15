import React, { useState, useEffect } from 'react';
import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loginStatus, setLoginStatus] = useState('');
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState({ username: '', password: '' });

  useEffect(() => {
    const stroredUsers = localStorage.getItem('users');
    if (stroredUsers) {
        setUsers(JSON.parse(stroredUsers));
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = { username: '', password: '' };
    let isValid = true;

    if (!formData.username) {
      errors.username = 'Username is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9]{3,20}$/.test(formData.username)) {
      errors.username = 'Username must be alphanumeric and 3-20 characters long';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userExists = users.some(
        (user) => user.username === formData.username && user.password === formData.password
      );

      if (userExists) {
        setLoginStatus('Login successful!');
      } else {
        setLoginStatus('Invalid username or password.');
      }

    } else {
      setLoginStatus('Please fix the errors in the form.');
    }
  };

  const handleCancel = () => {
    setFormData({ username: '', password: '' });
    setFormErrors({ username: '', password: '' });
    setLoginStatus('');
  };

  return (
    <div className="login-container">
      <h2 className="login-container-heading">Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className='input-label' htmlFor="username">User name</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formErrors.username && <p className="input-error">{formErrors.username}</p>}
        </div>

        <div className="input-group">
          <label className='input-label' htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <p className="input-error">{formErrors.password}</p>}
        </div>

        <div className="button-group">
          <button className="button-group-submit" type="submit">Submit</button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>

      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default Login;