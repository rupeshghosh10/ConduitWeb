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
        <a href='/' className='navbar-brand mb-0 h1'>Conduit</a>
        <button className='navbar-toggler' type='button' onClick={handleNavbarCollapse}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`${isNavbarCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a href='/' className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link'>New Article</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link'>Settings</a>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            {!user.isSignedIn &&
              <>
                <li className='nav-item'>
                  <Link to='/signin' className='nav-link'>Sign in</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signup' className='nav-link'>Sign up</Link>
                </li>
              </>}
            {user.isSignedIn &&
              <>
                <li>
                  <a href='/' className='nav-link'>{user.email}</a>
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
