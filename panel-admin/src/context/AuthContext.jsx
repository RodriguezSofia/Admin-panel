import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializamos con null (sin sesión activa)
  const [user, setUser] = useState(null);

  // Función para iniciar sesión simulada
  const login = (username, role) => {
    setUser({ username, role });
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de forma más sencilla
export const useAuth = () => useContext(AuthContext);