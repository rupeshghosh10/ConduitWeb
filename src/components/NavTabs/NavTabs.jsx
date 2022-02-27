import { Link } from 'react-router-dom';

const NavTabs = ({ tabs, handleTabClick, activeTab }) => {
  return (
    <ul className='nav nav-tabs'>
      {tabs.map(tab => (
        <li key={tab.id} className='nav-item'>
          <Link
            to='/'
            className={`nav-link link-success ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}>
            {tab.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
