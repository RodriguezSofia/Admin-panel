import React from 'react';

const EditarLibro = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>
          Editar Libro
        </h1>

        <div style={formGroup}>
          <label>Título</label>
          <input
            defaultValue="Cien años de soledad"
            style={inputStyle}
          />
        </div>

        <div style={formGroup}>
          <label>Autor</label>
          <input
            defaultValue="Gabriel García Márquez"
            style={inputStyle}
          />
        </div>

        <div style={formGroup}>
          <label>Categoría</label>
          <input
            defaultValue="Realismo Mágico"
            style={inputStyle}
          />
        </div>

        <button style={buttonStyle}>
          Guardar Cambios
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

export default EditarLibro;