import { Link, useNavigate } from 'react-router-dom'
import { MdLogin, MdLogout, MdSearch , MdMenu, MdClose} from "react-icons/md"
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const closeMenuOnBackdrop = () => {
    setIsMenuOpen(false);
  };


  const navigate = useNavigate();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setShowSearch(false); 
      setSearchQuery("");   
    } else {        
      setShowSearch(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header-area'>
      <div className="log-buttons"> 
         <div className="mobile-menu-button">
          <button onClick={toggleMenu}><MdMenu size="28" /></button>
        </div>

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
            <form className='search-form' onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                name="search" 
                placeholder="검색" 
                className="search-input-field"     
                value={searchQuery}         
                onChange={handleInputChange}            
                autoFocus 
              />
            </form>
          )}
          <button onClick={showSearch ? handleSearchSubmit : toggleSearch} className='search-submit-btn'>
            <MdSearch />
          </button>
        </div>       
      </div>

      <div className="logo-box">
        <Link to="/" className='logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" alt="H&M" />
        </Link>
      </div> 

      <nav className="main-nav desktop-only">
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

      {isMenuOpen && (
        <div 
            className="backdrop mobile-only" 
            onClick={closeMenuOnBackdrop} 
        />
      )}

      {isMenuOpen && (
        <div className="side-menu mobile-only">
          <div className="side-menu-header">
            <button onClick={handleMenuClick} className='menu-close-btn'><MdClose size="28" /></button>
          </div>
          <nav className="side-nav">
            <ul>
            {MENU_ITEMS.map((menu)=>{
              return (
                  <li key={menu.name} onClick={handleMenuClick}> 
                    <Link to={menu.path}>{menu.name}</Link>
                  </li>
              )
            })}
            </ul>
          </nav>
        </div>
      )}
              
    </header>
  )
}

export default Header