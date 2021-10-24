import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';
// import Pdf from '../../static/Vikranth_s_Resume.pdf';
const { PUBLIC_URL } = process.env;

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
      {/* <Link key="Resume" to={Pdf}>Resume</Link> */}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
        <li key="Resume">
          <Link target="_blank" key="Resume" to={"./Vikranth_s_Resume.pdf"}>Resume</Link>
        </li>
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
