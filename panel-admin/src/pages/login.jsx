import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import {
  BookOpen,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  Bookmark
} from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('Invitado');
  const [isHovered, setIsHovered] = useState(false);

  const { login: loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginUser) {
      loginUser('Ana Sofía', role);
      navigate('/');
    }
  };

  return (
    <div style={pageStyle}>
      {/* PANEL IZQUIERDO */}
      <div style={leftPanel}>
        <div style={overlay}></div>

        <div style={leftContent}>
          <div style={logoContainer}>
            <BookOpen size={26} strokeWidth={1.8} />
          </div>

          <span style={miniBadge}>
            Biblioteca Virtual
          </span>

          <h1 style={heroTitle}>
            Lumora
          </h1>

          <p style={heroText}>
            Un espacio elegante para gestionar libros, lectores,
            préstamos y colecciones literarias.
          </p>

          <div style={featuresContainer}>
            <Feature
              icon={<Bookmark size={18} />}
              text="Gestión de catálogos"
            />

            <Feature
              icon={<Users size={18} />}
              text="Administración de lectores"
            />

            <Feature
              icon={<ShieldCheck size={18} />}
              text="Roles y permisos seguros"
            />
          </div>
        </div>
      </div>

      {/* PANEL DERECHO */}
      <div style={rightPanel}>
        <form onSubmit={handleLogin} style={formCard}>
          <div style={topIcon}>
            <Sparkles size={24} strokeWidth={1.7} />
          </div>

          <h2 style={formTitle}>
            Acceso al Sistema
          </h2>

          <p style={formSubtitle}>
            Ingresa al panel administrativo de la biblioteca
          </p>

          {/* SELECT */}
          <div style={inputContainer}>
            <label style={labelStyle}>
              Rol de acceso
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={selectStyle}
            >
              <option value="Administrador">
                Administrador
              </option>

              <option value="Editor">
                Operativo / Editor
              </option>

              <option value="Invitado">
                Invitado
              </option>
            </select>
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              ...buttonStyle,
              backgroundColor: isHovered
                ? '#C42B34'
                : '#FC8A2D'
            }}
          >
            Ingresar al Panel
            <ArrowRight size={18} />
          </button>

          <p style={footerText}>
            Biblioteca Virtual • Sistema Administrativo
          </p>
        </form>
      </div>
    </div>
  );
};

/* COMPONENTE FEATURE */
const Feature = ({ icon, text }) => {
  return (
    <div style={featureItem}>
      <div style={featureIcon}>
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
};

/* ESTILOS */

const pageStyle = {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  backgroundColor: '#FCFBF8',
  overflow: 'hidden'
};

const leftPanel = {
  position: 'relative',
  background:
    'linear-gradient(135deg, #C42B34 0%, #FC8A2D 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '60px',
  overflow: 'hidden'
};

const overlay = {
  position: 'absolute',
  inset: 0,
  background:
    'radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 40%)'
};

const leftContent = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '520px',
  color: 'white'
};

const logoContainer = {
  width: '68px',
  height: '68px',
  borderRadius: '22px',
  backgroundColor: 'rgba(255,255,255,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '25px',
  backdropFilter: 'blur(10px)'
};

const miniBadge = {
  display: 'inline-block',
  padding: '8px 14px',
  borderRadius: '999px',
  backgroundColor: 'rgba(255,255,255,0.15)',
  fontSize: '12px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  marginBottom: '22px',
  backdropFilter: 'blur(10px)'
};

const heroTitle = {
  fontFamily: 'Georgia, serif',
  fontSize: '64px',
  fontWeight: '400',
  lineHeight: '1.1',
  marginBottom: '18px'
};

const heroText = {
  fontSize: '16px',
  lineHeight: '1.9',
  opacity: 0.92,
  maxWidth: '500px',
  marginBottom: '40px'
};

const featuresContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '18px'
};

const featureItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  fontSize: '15px'
};

const featureIcon = {
  width: '42px',
  height: '42px',
  borderRadius: '14px',
  backgroundColor: 'rgba(255,255,255,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(10px)'
};

const rightPanel = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px'
};

const formCard = {
  width: '100%',
  maxWidth: '430px',
  backgroundColor: '#FFFFFF',
  padding: '45px',
  borderRadius: '32px',
  border: '1px solid #EFECE3',
  boxShadow: '0px 20px 40px rgba(0,0,0,0.05)'
};

const topIcon = {
  width: '62px',
  height: '62px',
  borderRadius: '20px',
  backgroundColor: '#FCE9AB',
  color: '#C42B34',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px'
};

const formTitle = {
  fontFamily: 'Georgia, serif',
  fontSize: '34px',
  color: '#2C2A29',
  fontWeight: '400',
  marginBottom: '10px'
};

const formSubtitle = {
  color: '#7C756E',
  lineHeight: '1.7',
  marginBottom: '35px',
  fontSize: '14px'
};

const inputContainer = {
  marginBottom: '30px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  color: '#7C756E',
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: '600'
};

const selectStyle = {
  width: '100%',
  padding: '16px',
  borderRadius: '16px',
  border: '1.5px solid #EFECE3',
  backgroundColor: '#FCFBF8',
  color: '#2C2A29',
  fontSize: '14px',
  outline: 'none',
  cursor: 'pointer'
};

const buttonStyle = {
  width: '100%',
  padding: '16px',
  border: 'none',
  borderRadius: '16px',
  color: 'white',
  fontSize: '15px',
  fontWeight: '600',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  transition: '0.25s ease',
  boxShadow: '0px 12px 24px rgba(252, 138, 45, 0.22)'
};

const footerText = {
  textAlign: 'center',
  marginTop: '24px',
  color: '#B1AAA3',
  fontSize: '12px'
};

export default Login;