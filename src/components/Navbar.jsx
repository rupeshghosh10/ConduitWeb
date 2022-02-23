import { useState } from 'react';

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  }

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark border-bottom'>
      <div class="container-fluid">
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
            <li className='nav-item'>
              <a className='nav-link' href='/'>Sign in</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
