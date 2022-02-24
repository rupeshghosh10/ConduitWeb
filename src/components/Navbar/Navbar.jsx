import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutAction } from '../../store/user/userAction';

const Navbar = () => {

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  }

  const handleSignout = e => {
    e.preventDefault();
    dispatch(signoutAction());
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark border-bottom fixed-top'>
      <div className="container-fluid">
        <a className='navbar-brand mb-0 h1' href='/'>Conduit</a>
        <button className='navbar-toggler' type='button' onClick={handleNavbarCollapse}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`${isNavbarCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>New Article</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Settings</a>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            {!user.isSignedIn &&
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/signin'>Sign in</Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>Sign up</a>
                </li>
              </>}
            {user.isSignedIn &&
              <>
                <li>
                  <a className='nav-link' href='/'>{user.email}</a>
                </li>
                <li>
                  <a className='nav-link' href='/signout' onClick={handleSignout}>Sing out</a>
                </li>
              </>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
