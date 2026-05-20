import React, { useState } from 'react';
import {
  Search,
  Plus,
  BookOpen,
  Pencil,
  Trash2,
  HandHelping,
  Eye,
  X // Importamos el ícono para cerrar el modal
} from 'lucide-react';

const Programas = () => {
  const [search, setSearch] = useState('');
  const [libros, setLibros] = useState([
    {
      id: 1,
      titulo: 'Antología Poética',
      autor: 'Gabriela Mistral',
      categoria: 'Lírica',
      estado: 'Disponible'
    },
    {
      id: 2,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      categoria: 'Realismo Mágico',
      estado: 'Prestado'
    },
    {
      id: 3,
      titulo: 'Crítica de la razón pura',
      autor: 'Immanuel Kant',
      categoria: 'Filosofía',
      estado: 'Disponible'
    }
  ]);

  // --- NUEVOS ESTADOS PARA EL MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [libroSeleccionado, setLibroSeleccionado] = useState(null); // null = Modo Agregar, {objeto} = Modo Editar
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    categoria: '',
    estado: 'Disponible'
  });

  // --- FUNCIONES DE MANEJO ---
  
  // Abre el modal para crear un libro nuevo
  const abrirModalAgregar = () => {
    setLibroSeleccionado(null);
    setFormData({ titulo: '', autor: '', categoria: '', estado: 'Disponible' });
    setIsModalOpen(true);
  };

  // Abre el modal con los datos cargados para editar
  const abrirModalEditar = (libro) => {
    setLibroSeleccionado(libro);
    setFormData({
      titulo: libro.titulo,
      autor: libro.autor,
      categoria: libro.categoria,
      estado: libro.estado
    });
    setIsModalOpen(true);
  };

  const guardarLibro = (e) => {
    e.preventDefault();

    if (libroSeleccionado) {
      // MODO EDICIÓN: Actualiza el libro existente
      setLibros(libros.map(l => l.id === libroSeleccionado.id ? { ...l, ...formData } : l));
    } else {
      // MODO AGREGAR: Crea un nuevo ID y añade el libro
      const nuevoLibro = {
        id: Date.now(), // ID único temporal
        ...formData
      };
      setLibros([...libros, nuevoLibro]);
    }

    setIsModalOpen(false); // Cierra el modal
  };

  const eliminarLibro = (id) => {
    setLibros(libros.filter((libro) => libro.id !== id));
  };

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Estantería</h1>
          <p style={subtitleStyle}>Gestión editorial del catálogo virtual</p>
        </div>

        {/* CONECTADO: Botón Nuevo Libro */}
        <button style={addButton} onClick={abrirModalAgregar}>
          <Plus size={18} />
          Nuevo Libro
        </button>
      </div>

      <div style={searchContainer}>
        <Search size={18} color="#7C756E" />
        <input
          type="text"
          placeholder="Buscar libro..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />
      </div>

      <div style={gridStyle}>
        {librosFiltrados.map((libro) => (
          <div key={libro.id} style={cardStyle}>
            <div style={coverStyle}>
              <BookOpen size={40} />
            </div>

            <span style={categoryStyle}>{libro.categoria}</span>
            <h2 style={bookTitle}>{libro.titulo}</h2>
            <p style={authorStyle}>{libro.autor}</p>

            <div style={footerStyle}>
              <span
                style={{
                  ...statusStyle,
                  backgroundColor: libro.estado === 'Disponible' ? '#F4F8E8' : '#FFE8EA',
                  color: libro.estado === 'Disponible' ? '#7A8A1F' : '#C42B34'
                }}
              >
                {libro.estado}
              </span>
            </div>

            <div style={actionsContainer}>
              <button style={viewButton}>
                <Eye size={16} />
              </button>

              {/* CONECTADO: Botón Editar Libro */}
              <button style={editButton} onClick={() => abrirModalEditar(libro)}>
                <Pencil size={16} />
              </button>

              <button style={deleteButton} onClick={() => eliminarLibro(libro.id)}>
                <Trash2 size={16} />
              </button>
            </div>

            <button style={prestamoButton}>
              <HandHelping size={16} />
              Prestar Libro
            </button>
          </div>
        ))}
      </div>

      {/* --- RENDER CONDICIONAL DEL MODAL --- */}
      {isModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2 style={modalTitleStyle}>
                {libroSeleccionado ? 'Editar Libro' : 'Agregar Nuevo Libro'}
              </h2>
              <button style={closeModalButton} onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={guardarLibro}>
              <div style={formGroup}>
                <label style={labelStyle}>Título</label>
                <input
                  type="text"
                  required
                  style={formInputStyle}
                  value={formData.titulo}
                  onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                />
              </div>

              <div style={formGroup}>
                <label style={labelStyle}>Autor</label>
                <input
                  type="text"
                  required
                  style={formInputStyle}
                  value={formData.autor}
                  onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
                />
              </div>

              <div style={formGroup}>
                <label style={labelStyle}>Categoría</label>
                <input
                  type="text"
                  required
                  style={formInputStyle}
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                />
              </div>

              <div style={formGroup}>
                <label style={labelStyle}>Estado</label>
                <select
                  style={formInputStyle}
                  value={formData.estado}
                  onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                >
                  <option value="Disponible">Disponible</option>
                  <option value="Prestado">Prestado</option>
                </select>
              </div>

              <button type="submit" style={submitFormButton}>
                {libroSeleccionado ? 'Guardar Cambios' : 'Agregar Libro'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

/* ESTILOS EXISTENTES ... */
const containerStyle = { padding: '40px', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#FCFBF8', minHeight: '100vh' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' };
const titleStyle = { fontFamily: 'Georgia, serif', fontSize: '42px', color: '#2C2A29', fontWeight: '400' };
const subtitleStyle = { color: '#7C756E', marginTop: '8px' };
const addButton = { display: 'flex', alignItems: 'center', gap: '10px', border: 'none', padding: '14px 22px', borderRadius: '14px', backgroundColor: '#FC8A2D', color: '#FFFFFF', fontWeight: '600', cursor: 'pointer' };
const searchContainer = { display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#FFFFFF', border: '1px solid #EFECE3', padding: '16px', borderRadius: '18px', marginBottom: '30px' };
const searchInput = { border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent', fontSize: '14px' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' };
const cardStyle = { backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '24px', border: '1px solid #EFECE3', boxShadow: '0px 10px 24px rgba(156,61,37,0.03)' };
const coverStyle = { height: '180px', borderRadius: '20px', backgroundColor: '#FCE9AB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FC8A2D', marginBottom: '20px' };
const categoryStyle = { fontSize: '11px', textTransform: 'uppercase', color: '#9E9820', fontWeight: '700' };
const bookTitle = { fontFamily: 'Georgia, serif', fontSize: '24px', marginTop: '10px', color: '#2C2A29' };
const authorStyle = { color: '#7C756E', marginTop: '6px' };
const footerStyle = { marginTop: '20px' };
const statusStyle = { padding: '8px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '600' };
const actionsContainer = { display: 'flex', gap: '10px', marginTop: '20px' };
const actionButtonBase = { width: '42px', height: '42px', borderRadius: '12px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };
const viewButton = { ...actionButtonBase, backgroundColor: '#EFECE3', color: '#7C756E' };
const editButton = { ...actionButtonBase, backgroundColor: '#FCE9AB', color: '#9E9820' };
const deleteButton = { ...actionButtonBase, backgroundColor: '#FFE8EA', color: '#C42B34' };
const prestamoButton = { marginTop: '18px', width: '100%', border: 'none', padding: '14px', borderRadius: '14px', backgroundColor: '#FC8A2D', color: '#FFFFFF', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer' };

/* --- NUEVOS ESTILOS PARA EL MODAL (Manteniendo la estética limpia) --- */
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(44, 42, 41, 0.6)', // Desenfoque oscuro elegante
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalContentStyle = {
  backgroundColor: '#FFFFFF',
  padding: '32px',
  borderRadius: '24px',
  width: '100%',
  maxWidth: '450px',
  boxShadow: '0px 20px 40px rgba(0,0,0,0.1)',
  border: '1px solid #EFECE3'
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px'
};

const modalTitleStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '24px',
  color: '#2C2A29',
  fontWeight: '400'
};

const closeModalButton = {
  background: 'none',
  border: 'none',
  color: '#7C756E',
  cursor: 'pointer'
};

const formGroup = {
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const labelStyle = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#7C756E'
};

const formInputStyle = {
  padding: '12px 16px',
  borderRadius: '12px',
  border: '1px solid #EFECE3',
  fontSize: '14px',
  color: '#2C2A29',
  outline: 'none',
  backgroundColor: '#FCFBF8'
};

const submitFormButton = {
  width: '100%',
  padding: '14px',
  borderRadius: '14px',
  backgroundColor: '#FC8A2D',
  color: '#FFFFFF',
  fontWeight: '600',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px'
};

export default Programas;