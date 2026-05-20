import React from 'react';

import {
  LayoutDashboard,
  BookOpen,
  Users,
  ArrowRightLeft,
} from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
      path: '/'
    },
    {
      name: 'Libros',
      icon: <BookOpen size={18} />,
      path: '/programas'
    },
    {
      name: 'Usuarios',
      icon: <Users size={18} />,
      path: '/usuarios'
    },
    {
      name: 'Préstamos',
      icon: <ArrowRightLeft size={18} />,
      path: '/prestamos'
    }
  ];

  return (
    <aside style={sidebarStyle}>
      <div>
        <h1 style={logoStyle}>
          Lumora
        </h1>

        <p style={subtitleStyle}>
          Biblioteca Virtual
        </p>
      </div>

      <nav style={navStyle}>
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{
              ...linkStyle,
              backgroundColor:
                location.pathname === item.path
                  ? '#FCE9AB'
                  : 'transparent',
              color:
                location.pathname === item.path
                  ? '#FC8A2D'
                  : '#7C756E'
            }}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

const sidebarStyle = {
  width: '260px',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
  borderRight: '1px solid #EFECE3',
  padding: '30px 20px',
  position: 'fixed',
  left: 0,
  top: 0
};

const logoStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '34px',
  color: '#C42B34',
  fontWeight: '400'
};

const subtitleStyle = {
  color: '#7C756E',
  marginTop: '6px',
  fontSize: '14px'
};

const navStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '40px'
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '14px 16px',
  borderRadius: '14px',
  textDecoration: 'none',
  fontWeight: '500',
  transition: '0.2s ease'
};

export default Sidebar;