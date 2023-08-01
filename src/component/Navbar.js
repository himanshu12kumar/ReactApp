import React from 'react'
import { Link } from 'react-router-dom';
// import propTypes from 'prop-types';
import propTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${(props.mode === 'light')?'dark':'success'}`} href="/">{props.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${(props.mode === 'light')?'dark':'success'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${(props.mode === 'light')?'dark':'success'}`} to="/About">{props.aboutText}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${(props.mode === 'light')?'dark':'success'}`} to="/Color">Contact</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${(props.mode === 'light')?'dark':'success'} m-2`}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    tittle:propTypes.string.isRequired,
    aboutText:propTypes.string.isRequired
}

Navbar.defaultProps = {
    tittle: 'set title here',
    aboutText: 'About text here'
}
