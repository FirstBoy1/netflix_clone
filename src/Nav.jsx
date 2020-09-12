import React, { useState, useEffect } from 'react';

import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    };
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
