import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar({ onLogout }) {
  const page = useLocation().pathname.slice(1);

  const getStylesNavItem = (itemPage) => {
    return 'nav-item ' + (itemPage === page ? 'nav-item-active' : '');
  };

  const loggedIn = () => {
    return localStorage.getItem('x-auth-token');
  };

  return (
    <div className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Movie Watchlist
        </Link>
        <ul className='navbar-nav'>
          <Link to='/' className={getStylesNavItem('')}>
            Movies
          </Link>
          {loggedIn() && (
            <>
              <Link to='/watchlist' className={getStylesNavItem('watchlist')}>
                Watchlist
              </Link>
              <a onClick={onLogout} className='nav-item'>
                Logout
              </a>
            </>
          )}

          {!loggedIn() && (
            <>
              <Link to='/login' className={getStylesNavItem('login')}>
                Login
              </Link>
              <Link to='/register' className={getStylesNavItem('register')}>
                Register
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
