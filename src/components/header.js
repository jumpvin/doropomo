import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles/header.css';

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="menu">
      <Link to="/page-2/">
          Blog
      </Link>
      <Link to="/about/">
          About
      </Link>
      <Link to="/demo/">
          Demo
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
