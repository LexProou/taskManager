
import './Navbar.scss';
import { useState } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';


interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {

  const [menuActive, setMenuActive] = useState(false);


  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav>
        <div className="nav-header">
          <a href="#" className="logo">Task<span>Manager</span></a>
          <button className="nav-btn" color="inherit" aria-label="menu" onClick={toggleMenu}>
            {menuActive ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
        <ul className={`navbar ${menuActive ? 'active' : ''}`}>     
        </ul>
        
        {/* <Button onClick={onLogout}>Logout</Button> */}
      </nav>
    </header>
  );
};

export default Navbar;