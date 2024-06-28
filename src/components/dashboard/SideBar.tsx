import { FC, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../../utils/data';

interface Props {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const SideBar: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  const pathname: string = useLocation().pathname;
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const isRouteActive = (route: string) => {
    if (pathname === '/dashboard' && route === '/dashboard') {
      return true;
    }
    const path = route.split('/')[2];
    return Boolean(pathname.includes(path));
  };

  const handleSelection = (id: number) => {
    setSelectedId(id);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/auth/login');
  };

  return (
    <div className={`side-nav ${isMenuOpen && 'nav-active'}`}>
      <div>
        <ul className="side-nav-menu">
          {navItems.map((item) => {
            if (item.isLogout) {
              return (
                <div key={item.id}>
                  <li
                    className={`side-nav-menu-item ${isRouteActive(item.link) ? 'active' : ''} ${
                      selectedId === item.id ? 'selected' : ''
                    }`}
                    onClick={handleLogout}
                  >
                    <img src={item.icon} alt="" />
                    <span>{item.title}</span>
                  </li>
                </div>
              );
            }
            return (
              <div key={item.id}>
                {!item.header ? (
                  <Link to={item.link} style={{ textDecoration: 'none' }}>
                    <li
                      className={`side-nav-menu-item ${isRouteActive(item.link) ? 'active' : ''} ${
                        selectedId === item.id ? 'selected' : ''
                      }`}
                      onClick={() => handleSelection(item.id)}
                    >
                      {!item.header && <img src={item.icon} alt="" />}
                      <span style={{ color: item.id === 1 ? '#213f7d' : 'inherit' }}>{item.title}</span>
                      {item.id === 1 && (
                        <span>
                          <img src="/icons/dropdown.svg" alt="expand menu" />
                        </span>
                      )}
                    </li>
                  </Link>
                ) : (
                  <li className="nav-item-header">
                    <span>{item.title}</span>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;