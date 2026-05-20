import React, { useState } from 'react';

import {
  BookOpen,
  CalendarDays,
  User,
  Clock3,
  Search
} from 'lucide-react';

const Prestamos = () => {
  const [search, setSearch] = useState('');

  const prestamos = [
    {
      id: 1,
      libro: 'Cien años de soledad',
      usuario: 'Denise Ocampo',
      fecha: '20 Mayo 2026',
      devolucion: '28 Mayo 2026',
      estado: 'Activo'
    },
    {
      id: 2,
      libro: 'El Aleph',
      usuario: 'Carlos Ruiz',
      fecha: '18 Mayo 2026',
      devolucion: '25 Mayo 2026',
      estado: 'Vencido'
    },
    {
      id: 3,
      libro: 'Rayuela',
      usuario: 'Katherine Giraldo',
      fecha: '12 Mayo 2026',
      devolucion: '19 Mayo 2026',
      estado: 'Activo'
    }
  ];

  const prestamosFiltrados = prestamos.filter((item) =>
    item.libro.toLowerCase().includes(search.toLowerCase()) ||
    item.usuario.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      {/* HEADER */}
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>
            Sistema de Préstamos
          </h1>

          <p style={subtitleStyle}>
            Registro y seguimiento de préstamos literarios
          </p>
        </div>

        <div style={searchContainer}>
          <Search size={18} color="#7C756E" />

          <input
            type="text"
            placeholder="Buscar préstamo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchInput}
          />
        </div>
      </div>

      {/* ESTADÍSTICAS */}
      <div style={statsGrid}>
        <div style={statCard}>
          <div style={iconContainerOrange}>
            <BookOpen size={22} />
          </div>

          <div>
            <p style={statLabel}>Libros Prestados</p>
            <h2 style={statNumber}>124</h2>
          </div>
        </div>

        <div style={statCard}>
          <div style={iconContainerOlive}>
            <Clock3 size={22} />
          </div>

          <div>
            <p style={statLabel}>Préstamos Activos</p>
            <h2 style={statNumber}>42</h2>
          </div>
        </div>

        <div style={statCard}>
          <div style={iconContainerRed}>
            <CalendarDays size={22} />
          </div>

          <div>
            <p style={statLabel}>Vencidos</p>
            <h2 style={statNumber}>7</h2>
          </div>
        </div>
      </div>

      {/* TABLA */}
      <div style={tableContainer}>
        <div style={tableHeader}>
          <div>Libro</div>
          <div>Lector</div>
          <div>Fecha</div>
          <div>Entrega</div>
          <div>Estado</div>
        </div>

        {prestamosFiltrados.map((item) => (
          <div key={item.id} style={tableRow}>
            {/* LIBRO */}
            <div style={bookCell}>
              <div style={miniBook}>
                <BookOpen size={18} />
              </div>

              {/* El div contenedor necesita un ancho mínimo para que funcione el corte de texto */}
              <div style={{ minWidth: 0 }}>
                <p style={bookTitleStyle} title={item.libro}>
                  {item.libro}
                </p>

                <span style={bookId}>
                  Código #{item.id}
                </span>
              </div>
            </div>

            {/* USUARIO */}
            <div style={{ ...userCell, minWidth: 0 }}>
              <div style={userAvatar}>
                <User size={14} />
              </div>

              <span style={truncateText} title={item.usuario}>
                {item.usuario}
              </span>
            </div>

            {/* FECHA */}
            <div style={dateText}>
              {item.fecha}
            </div>

            {/* DEVOLUCIÓN */}
            <div style={dateText}>
              {item.devolucion}
            </div>

            {/* ESTADO */}
            <div>
              <span
                style={{
                  ...statusStyle,
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
          </div>
        ))}

        {prestamosFiltrados.length === 0 && (
          <div style={{ padding: '30px', textAlign: 'center', color: '#7C756E', fontSize: '15px' }}>
            No se encontraron préstamos que coincidan con la búsqueda.
          </div>
        )}
      </div>
    </div>
  );
};

/* ESTILOS OPTIMIZADOS */

const containerStyle = {
  padding: '40px',
  backgroundColor: '#FCFBF8',
  minHeight: '100vh',
  boxSizing: 'border-box'
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '35px',
  gap: '20px',
  flexWrap: 'wrap'
};

const titleStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '42px',
  color: '#2C2A29',
  fontWeight: '400',
  margin: 0
};

const subtitleStyle = {
  marginTop: '8px',
  color: '#7C756E',
  fontSize: '14px'
};

const searchContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #EFECE3',
  borderRadius: '16px',
  padding: '14px 18px',
  width: '280px'
};

const searchInput = {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  width: '100%',
  fontSize: '14px'
};

const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '20px',
  marginBottom: '35px'
};

const statCard = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #EFECE3',
  borderRadius: '24px',
  padding: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  boxShadow: '0px 8px 20px rgba(156,61,37,0.03)'
};

const iconBase = {
  width: '52px',
  height: '52px',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const iconContainerOrange = {
  ...iconBase,
  backgroundColor: '#FCE9AB',
  color: '#FC8A2D'
};

const iconContainerOlive = {
  ...iconBase,
  backgroundColor: '#EEF3D7',
  color: '#9E9820'
};

const iconContainerRed = {
  ...iconBase,
  backgroundColor: '#FFE8EA',
  color: '#C42B34'
};

const statLabel = {
  color: '#7C756E',
  fontSize: '13px',
  marginBottom: '6px',
  margin: 0
};

const statNumber = {
  fontFamily: 'Georgia, serif',
  fontSize: '30px',
  color: '#2C2A29',
  fontWeight: '400',
  margin: 0
};

const tableContainer = {
  backgroundColor: '#FFFFFF',
  borderRadius: '28px',
  border: '1px solid #EFECE3',
  boxShadow: '0px 10px 30px rgba(156,61,37,0.03)',
  width: '100%',
  boxSizing: 'border-box'
};

/* AJUSTE DE FRACCIONES: Más espacio para libro (2.2fr) y lector (1.8fr), menos para las fechas */
const tableHeader = {
  display: 'grid',
  gridTemplateColumns: '2.2fr 1.8fr 1.2fr 1.2fr 1fr',
  padding: '22px 28px',
  backgroundColor: '#FCE9AB',
  color: '#2C2A29',
  fontWeight: '600',
  fontSize: '14px'
};

const tableRow = {
  display: 'grid',
  gridTemplateColumns: '2.2fr 1.8fr 1.2fr 1.2fr 1fr',
  padding: '22px 28px',
  borderBottom: '1px solid #EFECE3',
  alignItems: 'center',
  fontSize: '14px'
};

const bookCell = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  minWidth: 0 // Evita que el contenedor empuje las demás columnas
};

const miniBook = {
  width: '44px',
  height: '44px',
  borderRadius: '14px',
  backgroundColor: '#FCE9AB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FC8A2D',
  flexShrink: 0
};

/* EFECTO TRUNCATE: Hace que si el título es largo, termine en "..." */
const bookTitleStyle = {
  fontWeight: '600',
  color: '#2C2A29',
  margin: '0 0 4px 0',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const bookId = {
  fontSize: '12px',
  color: '#7C756E'
};

const userCell = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#2C2A29'
};

const userAvatar = {
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  backgroundColor: '#EFECE3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#7C756E',
  flexShrink: 0
};

/* ESTILO REUTILIZABLE PARA CORTAR TEXTOS LARGOS */
const truncateText = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const dateText = {
  color: '#7C756E',
  fontSize: '14px',
  whiteSpace: 'nowrap'
};

const statusStyle = {
  padding: '8px 14px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: '600',
  display: 'inline-block'
};

export default Prestamos;