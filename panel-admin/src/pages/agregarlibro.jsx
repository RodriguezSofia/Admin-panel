import React from 'react';

const AgregarLibro = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>
          Agregar Libro
        </h1>

        <div style={formGroup}>
          <label>Título</label>
          <input style={inputStyle} />
        </div>

        <div style={formGroup}>
          <label>Autor</label>
          <input style={inputStyle} />
        </div>

        <div style={formGroup}>
          <label>Categoría</label>
          <input style={inputStyle} />
        </div>

        <button style={buttonStyle}>
          Guardar Libro
        </button>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '40px',
  backgroundColor: '#FCFBF8',
  minHeight: '100vh'
};

const cardStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#FFFFFF',
  padding: '40px',
  borderRadius: '24px',
  border: '1px solid #EFECE3'
};

const titleStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '38px',
  marginBottom: '30px',
  color: '#2C2A29'
};

const formGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px'
};

const inputStyle = {
  padding: '16px',
  borderRadius: '14px',
  border: '1px solid #EFECE3',
  outline: 'none'
};

const buttonStyle = {
  width: '100%',
  padding: '16px',
  border: 'none',
  borderRadius: '14px',
  backgroundColor: '#FC8A2D',
  color: '#FFFFFF',
  fontWeight: '600',
  cursor: 'pointer'
};

export default AgregarLibro;