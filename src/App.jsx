import './App.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Detail from './page/Detail';
import Login from './page/Login';
import Header from './component/Header';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './theme'; // 
import React, { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

/**
 * 1. 전체 상품페이지, 로그인, 상품상세페이지
 * 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
 * 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
 * 4. 상품상세페이지는 로그인 해야만 볼 수 있다 (로그인 안하면 로그인페이지로 이동한다)
 * 5. 로그아웃 버튼을 클릭하면 로그아웃 되면서 전체 상품페이지로 돌아간다 or 로그인페이지로 돌아간다
 * 6. 상품을 검색할 수 있다
 */

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthenticate(false);
    navigate('/'); 
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header authenticate={authenticate} setAuthenticate={setAuthenticate} handleLogout={handleLogout}/>
        
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
          <Route path="/detail/:id" element={<PrivateRoute authenticate={authenticate} />} />
        </Routes>
      </>
    </ThemeProvider>
  )
}

export default App