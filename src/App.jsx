import './App.css'
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Detail from './page/Detail';
import Login from './page/Login';
import Header from './component/Header';

/**
 * 1. 전체 상품페이지, 로그인, 상품상세페이지
 * 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
 * 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
 * 4. 상품상세페이지는 로그인 해야만 볼 수 있다 (로그인 안하면 로그인페이지로 이동한다)
 * 5. 로그아웃 버튼을 클릭하면 로그아웃 되면서 전체 상품페이지로 돌아간다 or 로그인페이지로 돌아간다
 * 6. 상품을 검색할 수 있다
 */

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App