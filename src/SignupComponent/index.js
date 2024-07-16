import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'


const SignupComponent = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errors, setErrors] = useState({});

  console.log(errors)

  const validate = () => {
    let tempErrors = {};
    tempErrors.userName = userName ? "" : "First name is required.";
    tempErrors.userEmail = userEmail ? "" : "Email is required.";
    tempErrors.userCompany = userCompany ? "" : "Phone number is required.";
    tempErrors.userPassword = userPassword ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const onSubmitData = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_firstname: userName,
            user_email: userEmail,
            user_phone: userCompany,
            user_password: userPassword,
            user_lastname: 'ni',
            user_city: 'Hyderabad',
            user_zipcode: '500072'
          })
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="signup-card-container">
      <form onSubmit={onSubmitData}>
       <div className="login-container">
          <h1>Sign up</h1>
          <h3>Already have an account? <Link to="/">Sign in </Link></h3>
          <div className="input-container">
            <label>Full name *</label>
            <input 
            type="text" 
            className='input'
            value={userName}
            onChange={e => setUserName(e.target.value)}
             />
          </div>
          <div className="input-container">
            <label>Email adress *</label>
            <input 
            type="email"
            className="input"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>password *</label>
            <input 
            type="password"
            className='input' 
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Company</label>
            <input 
            type="text" 
            className="input"
            value={userCompany}
            onChange={e => setUserCompany(e.target.value)}
             />
          </div> 
          <div className="checkbox-container">
            <input type="checkbox" />
            <label>I agree to the Terms of Service and Privacy Policy</label>
          </div>

        </div>
       <button type="submit" className='login-card-button'>Create your free account</button>
       </form>
    </div>
  )
}

export default SignupComponent;