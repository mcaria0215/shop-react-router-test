import { Link } from 'react-router-dom'
import { MdLogin, MdLogout, MdSearch } from "react-icons/md"
import React, { useState } from 'react';

const MENU_ITEMS = [
  { name: "전체 상품", path: "/" },
  { name: "남성", path: "/" },
  { name: "여성", path: "/" },
  { name: "아우터", path: "/" },
  { name: "팬츠", path: "/" },
  { name: "슈즈", path: "/" },
  { name: "액세서리", path: "/" },
];

const Header = ({authenticate, handleLogout}) => { 
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className='header-area'>
      <div className="log-buttons">                
        {authenticate ? (              
          <div onClick={handleLogout} className="log-out">
            <MdLogout /> 로그아웃
          </div>
          ) : (              
          <Link to="/login" className="log-in">
              <MdLogin /> 로그인
          </Link> 
        )}

        <div className="search-box">
          {showSearch && (
            <form className='search-form'>
              <input 
                type="text" 
                name="search" 
                placeholder="검색" 
                className="search-input-field" 
                autoFocus 
              />
            </form>
          )}
          <button onClick={toggleSearch} className='search-submit-btn'>
            <MdSearch />
          </button>
        </div>       
      </div>

      <div className="logo-box">
        <Link to="/" className='logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" alt="H&M" />
        </Link>
      </div> 

      <nav className="main-nav">
        <ul>
          {MENU_ITEMS.map((menu)=>{
            return (
              <li key={menu.name}>
                <Link to={menu.path}>{menu.name}</Link>
              </li>
            )
          })}
        </ul>   
      </nav> 
    </header>
  )
}

export default Header