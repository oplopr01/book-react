import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Book</div>
      <div className="navbar-buttons">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
