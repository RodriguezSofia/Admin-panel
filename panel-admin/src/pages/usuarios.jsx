import React, { useState } from 'react';

import {
  Search,
  UserPlus,
  Shield,
  Users,
  Crown,
  Pencil,
  Eye,
  Mail,
  MoreHorizontal
} from 'lucide-react';

const Usuarios = () => {
  const [search, setSearch] = useState('');

  // Datos simulados
  const usuarios = [
    {
      id: 1,
      nombre: 'Denise Ocampo',
      correo: 'denise@lectura.com',
      rol: 'Invitado',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Nicolk Sánchez',
      correo: 'nicolk@lectura.com',
      rol: 'Editor',
      estado: 'Activo'
    },
    {
      id: 3,
      nombre: 'Katherine Giraldo',
      correo: 'katherine@admin.com',
      rol: 'Administrador',
      estado: 'Activo'
    },
    {
      id: 4,
      nombre: 'Carlos Ruiz',
      correo: 'carlos@lectura.com',
      rol: 'Invitado',
      estado: 'Inactivo'
    }
  ];

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      {/* HEADER */}
      <header style={headerStyle}>
        <div>
          <span style={miniBadge}>
            Gestión Institucional
          </span>

          <h1 style={titleStyle}>
            Control de Lectores
          </h1>

          <p style={subtitleStyle}>
            Administra cuentas, permisos y credenciales
            dentro del sistema bibliotecario.
          </p>
        </div>

        <button style={addButton}>
          <UserPlus size={18} />
          Nuevo Usuario
        </button>
      </header>

      {/* HERO */}
      <section style={heroStyle}>
        <div>
          <p style={heroMiniText}>
            Comunidad Literaria
          </p>

          <h2 style={heroTitle}>
            Gestión organizada de lectores y administradores
          </h2>

          <p style={heroDescription}>
            Controla accesos, privilegios y participación
            dentro de la biblioteca virtual.
          </p>
        </div>

        <div style={heroIcon}>
          <Users size={70} strokeWidth={1.5} />
        </div>
      </section>

      {/* STATS */}
      <section style={statsContainer}>
        <StatCard
          title="Usuarios Totales"
          value="1,248"
          icon={<Users size={18} />}
          color="#FC8A2D"
          bg="#FFF0D9"
        />

        <StatCard
          title="Administradores"
          value="12"
          icon={<Crown size={18} />}
          color="#C42B34"
          bg="#FFE8EA"
        />

        <StatCard
          title="Editores"
          value="86"
          icon={<Pencil size={18} />}
          color="#9E9820"
          bg="#F9F7D8"
        />
      </section>

      {/* SEARCH */}
      <section style={toolbarStyle}>
        <div style={searchContainer}>
          <Search size={18} color="#7C756E" />

          <input
            type="text"
            placeholder="Buscar usuario..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchInput}
          />
        </div>
      </section>

      {/* TABLA */}
      <section style={tableContainer}>
        {/* HEADER TABLA */}
        <div style={tableHeader}>
          <div>Usuario</div>
          <div>Correo</div>
          <div>Rol</div>
          <div>Estado</div>
          <div>Acciones</div>
        </div>

        {/* FILAS */}
        {usuariosFiltrados.map((item) => (
          <div
            key={item.id}
            style={tableRow}
          >
            {/* USUARIO */}
            <div style={userCell}>
              <div style={avatarStyle}>
                {item.nombre.charAt(0)}
              </div>

              <div>
                <h4 style={userName}>
                  {item.nombre}
                </h4>

                <p style={userId}>
                  ID: #00{item.id}
                </p>
              </div>
            </div>

            {/* CORREO */}
            <div style={emailStyle}>
              <Mail size={15} />
              {item.correo}
            </div>

            {/* ROL */}
            <div>
              <span
                style={{
                  ...roleBadge,
                  backgroundColor:
                    item.rol === 'Administrador'
                      ? '#C42B34'
                      : item.rol === 'Editor'
                      ? '#9E9820'
                      : '#EFECE3',
                  color:
                    item.rol === 'Invitado'
                      ? '#7C756E'
                      : '#FFFFFF'
                }}
              >
                <Shield size={12} />
                {item.rol}
              </span>
            </div>

            {/* ESTADO */}
            <div>
              <span
                style={{
                  ...statusBadge,
                  backgroundColor:
                    item.estado === 'Activo'
                      ? '#F4F8E8'
                      : '#FFE8EA',
                  color:
                    item.estado === 'Activo'
                      ? '#7A8A1F'
                      : '#C42B34'
                }}
              >
                {item.estado}
              </span>
            </div>

            {/* ACCIONES */}
            <div style={actionsStyle}>
              <button style={iconButton}>
                <Eye size={16} />
              </button>

              <button style={iconButton}>
                <Pencil size={16} />
              </button>

              <button style={iconButton}>
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

/* COMPONENTE STATS */

const StatCard = ({
  title,
  value,
  icon,
  color,
  bg
}) => {
  return (
    <div style={statCardStyle}>
      <div
        style={{
          ...statIcon,
          backgroundColor: bg,
          color
        }}
      >
        {icon}
      </div>

      <div>
        <p style={statTitle}>
          {title}
        </p>

        <h3 style={statValue}>
          {value}
        </h3>
      </div>
    </div>
  );
};

/* ESTILOS */

const containerStyle = {
  padding: '40px',
  maxWidth: '1400px',
  margin: '0 auto',
  backgroundColor: '#FCFBF8',
  minHeight: '100vh'
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '35px',
  gap: '20px',
  flexWrap: 'wrap'
};

const miniBadge = {
  display: 'inline-block',
  padding: '8px 14px',
  borderRadius: '999px',
  backgroundColor: '#FCE9AB',
  color: '#9E9820',
  fontSize: '12px',
  fontWeight: '600',
  marginBottom: '18px'
};

const titleStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '42px',
  color: '#2C2A29',
  fontWeight: '400',
  marginBottom: '10px'
};

const subtitleStyle = {
  color: '#7C756E',
  lineHeight: '1.8',
  maxWidth: '650px'
};

const addButton = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  border: 'none',
  padding: '15px 22px',
  borderRadius: '16px',
  backgroundColor: '#FC8A2D',
  color: 'white',
  cursor: 'pointer',
  fontWeight: '600',
  boxShadow: '0px 12px 24px rgba(252, 138, 45, 0.18)'
};

const heroStyle = {
  background:
    'linear-gradient(135deg, #FFF7E8 0%, #FFFDF8 100%)',
  border: '1px solid #EFECE3',
  borderRadius: '28px',
  padding: '38px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '30px',
  gap: '20px',
  flexWrap: 'wrap'
};

const heroMiniText = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: '#FC8A2D',
  fontSize: '12px',
  marginBottom: '10px',
  fontWeight: '600'
};

const heroTitle = {
  fontFamily: 'Georgia, serif',
  fontSize: '34px',
  color: '#2C2A29',
  fontWeight: '400',
  marginBottom: '12px',
  maxWidth: '650px',
  lineHeight: '1.3'
};

const heroDescription = {
  color: '#7C756E',
  lineHeight: '1.8',
  maxWidth: '620px'
};

const heroIcon = {
  width: '130px',
  height: '130px',
  borderRadius: '28px',
  backgroundColor: '#FCE9AB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FC8A2D'
};

const statsContainer = {
  display: 'grid',
  gridTemplateColumns:
    'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '20px',
  marginBottom: '28px'
};

const statCardStyle = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #EFECE3',
  borderRadius: '22px',
  padding: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  boxShadow: '0px 8px 24px rgba(156, 61, 37, 0.03)'
};

const statIcon = {
  width: '52px',
  height: '52px',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const statTitle = {
  fontSize: '13px',
  color: '#7C756E',
  marginBottom: '6px'
};

const statValue = {
  fontFamily: 'Georgia, serif',
  fontSize: '28px',
  color: '#2C2A29',
  fontWeight: '400'
};

const toolbarStyle = {
  marginBottom: '28px'
};

const searchContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  backgroundColor: '#FFFFFF',
  padding: '15px 18px',
  borderRadius: '18px',
  border: '1px solid #EFECE3',
  maxWidth: '420px'
};

const searchInput = {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  width: '100%',
  color: '#2C2A29',
  fontSize: '14px'
};

const tableContainer = {
  backgroundColor: '#FFFFFF',
  borderRadius: '26px',
  border: '1px solid #EFECE3',
  overflow: 'hidden',
  boxShadow: '0px 10px 24px rgba(156, 61, 37, 0.03)'
};

const tableHeader = {
  display: 'grid',
  gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr',
  padding: '20px 28px',
  backgroundColor: '#FCE9AB',
  color: '#2C2A29',
  fontWeight: '600',
  fontSize: '14px',
  fontFamily: 'Georgia, serif'
};

const tableRow = {
  display: 'grid',
  gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr',
  padding: '22px 28px',
  borderBottom: '1px solid #EFECE3',
  alignItems: 'center',
  fontSize: '14px',
  color: '#2C2A29'
};

const userCell = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px'
};

const avatarStyle = {
  width: '46px',
  height: '46px',
  borderRadius: '16px',
  backgroundColor: '#FFE8EA',
  color: '#C42B34',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '16px'
};

const userName = {
  fontSize: '15px',
  marginBottom: '4px'
};

const userId = {
  color: '#7C756E',
  fontSize: '12px'
};

const emailStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#7C756E'
};

const roleBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 12px',
  borderRadius: '10px',
  fontSize: '12px',
  fontWeight: '600'
};

const statusBadge = {
  display: 'inline-flex',
  padding: '8px 12px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600'
};

const actionsStyle = {
  display: 'flex',
  gap: '10px'
};

const iconButton = {
  width: '38px',
  height: '38px',
  borderRadius: '12px',
  border: '1px solid #EFECE3',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#7C756E'
};

export default Usuarios;