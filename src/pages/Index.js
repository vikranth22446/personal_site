import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Vikranth Srivatsa's personal website. 4th year Berkeley EECS Student"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <p>
            I'm a fourth year at University of California, Berkeley.
            I do research at the RISE Lab under Joey Gonzalez and research at BLUES Lab.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        {/* or <Link to="/contact">contact</Link> me. */}
      </p>
      {/* <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
