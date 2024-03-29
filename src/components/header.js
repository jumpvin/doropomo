import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import './styles/header.css';

const Header = ({ siteTitle }) => {
  const info = typeof window !== `undefined` ? {width: window.innerWidth, height: window.innerHeight } : { width: '', height: '' };
  const [ windowSize ] = useState(info);
  const [ showSub, setShowSub ] = useState(false);
  const [menuType, setMenuType ] = useState(false);
  console.log(info);

  useEffect( () => {
    setMenuType(windowSize.width <= 650 ? true : false);
  }, [windowSize]);

  const handleShowSub = () => {
    setShowSub(showSub ? false : true);
  };

  return (
  <header>
    <div className = 'logo'>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className= 'menu'>
      <div 
        className = { menuType ? 'hamburger show-burger' : 'hamburger' }
        onClick = { handleShowSub }
      >
        <div className = 'menu-line' ></div>
        <div className = 'menu-line' ></div>
        <div className = 'menu-line' ></div>
      </div>
      <div className = { menuType ? showSub ? 'menu-items sub-menu show-sub-menu' : 'menu-items sub-menu' : 'menu-items' } >
        <Link to="/page-2/">
            Blog
        </Link>
        <Link to="/about/">
            About
        </Link>
        <a href = 'https://demo.doropomo.com'> Demo </a>
      </div>
    </div>
  </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
