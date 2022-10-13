import React from 'react';
import { useState } from 'react';

function Navbar({ loggedIn }) {
  const [page, setPage] = useState('watchlist');

  const getStylesNavItem = (itemPage) => {
    return 'nav-item ' + (itemPage === page ? 'nav-item-active' : 'null');
  };

  return (
    <div className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand'>Movie Watchlist</a>
        <ul className='navbar-nav'>
          <li className={getStylesNavItem('movies')}>Movies</li>
          {loggedIn && (
            <>
              <li className={getStylesNavItem('watchlist')}>Watchlist</li>
              <li className='nav-item'>Logout</li>
            </>
          )}

          {!loggedIn && (
            <>
              <li className={getStylesNavItem('login')}>Login</li>
              <li className={getStylesNavItem('register')}>Register</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
