import React, { useState } from 'react'
import '../styles/header.css'
import Login from '../pages/login'

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-div" >
            
            <div className="header-left">
                <a className="img-head"      href="/"> <img src={'./images/investlylogo.jpg'}/></a>
                <a className="logoName-head" href="/"        >Investly  </a>

                <a className="header-btn" href="/discover"   >Discover  </a>
                <a className="header-btn" href="/watchlist"  >Watchlist </a>
                <a className="header-btn" href="/create"     >Create    </a>
                <a className="header-btn" href="/investment" >Investment</a>
            </div>
            
            <div className="header-right">
              <a className="login-p" onClick={toggleLogin}>Login</a>
              {showLogin && <Login onClose={toggleLogin} />}
            </div>

        </div>
      </div>
    </header>
  )
}

export default Header