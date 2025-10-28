import React from 'react'
import { Link } from 'react-router-dom'
import { MdLogin, MdLogout, MdSearch } from "react-icons/md"

// 💡 메뉴 데이터 정의
const MENU_ITEMS = [
  { name: "전체 상품", path: "/" },
  { name: "남성 바지", path: "/productAll/male_pants" },
  { name: "여성 바지", path: "/productAll/female_pants" },
  { name: "아우터", path: "/productAll/outer" },
];

const Header = () => {
  return (
    <header className='header-area'>
      <div className="log-buttons">        
        <Link to="/login" className="log-in"><MdLogin /> 로그인</Link>        
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

        <div className="search-box">
          <Link to="/login" className="log-search"><MdSearch /></Link>
        </div>            
      </nav> 
    </header>
  )
}

export default Header