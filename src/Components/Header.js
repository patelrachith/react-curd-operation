import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();

  // function nextPath(path) {
  //   this.navigate(path);
  // }

  return (
    <>
      <button>Home</button>
      <button>About</button>
      <button>Contact</button>
    </>
  );
}

export default Header;
