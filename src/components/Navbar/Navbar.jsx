import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signoutAction } from '../../store/user/userAction';

const Navbar = () => {

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  }

  const handleSignout = e => {
    e.preventDefault();
    dispatch(signoutAction());
    navigate('/');
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark sticky-top'>
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
                  <Link to='/signout' className='nav-link' onClick={handleSignout}>Sign out</Link>
                </li>
              </>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
