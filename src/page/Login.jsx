import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {  
  const navigate = useNavigate(); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate('/');
  };

  return (
    <div id='container' className='login-page'>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>로그인</h2>        
        
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" required/>
        </div>

        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" required />
        </div>

        <button type="submit" className="login-button">로그인</button>
      </form>
   </div>
  )
}

export default Login