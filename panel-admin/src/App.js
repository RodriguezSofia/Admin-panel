import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';

// Importamos usando Mayúscula Inicial como exige React
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Usuarios from './pages/usuarios';
import Programas from './pages/programas';
import Prestamos from './pages/prestamos';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FDFCF7' }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute allowedRoles={['Administrador', 'Editor', 'Invitado']} />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['Administrador', 'Editor']} />}>
            <Route path="/programas" element={<Programas />} />
          </Route>
      
          <Route element={<ProtectedRoute allowedRoles={['Administrador']} />}>
            <Route path="/usuarios" element={<Usuarios />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['Administrador']} />}>
            <Route path="/prestamos" element={<Prestamos />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;