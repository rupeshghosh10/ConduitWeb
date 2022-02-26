import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, text }) => {
  return (
    <li className='nav-item active'>
      <NavLink to={to} className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`}>{text}</NavLink>
    </li>
  );
}

export default NavLinkItem;
