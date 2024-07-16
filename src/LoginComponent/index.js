import React from 'react'
import './index.css'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'


const LoginComponent = ({setUser}) => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  console.log(errors)

  const validate = () => {
    let tempErrors = {};
    tempErrors.userEmail = userEmail ? "" : "Email is required.";
    tempErrors.userPassword = userPassword ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_email: userEmail,
            user_password: userPassword
          })
        });
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
     return (
    <div className="login-card-container">
        <form onSubmit={submitLogin}>
       <div className="login-container">
          <h1>Sign in</h1>
          <h3>Don't  have an account? <Link to="/signup">Sign up </Link></h3>
          <div className="input-container">
            <label>Email adress*</label>
            <input 
            className="input"
            type="email"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)} />
          </div>
          <div className="input-container">
            <label>password</label>
            <input type="password"
            value={userPassword}
            className="input"
            onChange={e => setUserPassword(e.target.value)} />
          </div>
        </div>
       <button className='login-card-button' type="submit">Sign In</button>
    
       </form>

    </div>
    )
  
} 


export default LoginComponent