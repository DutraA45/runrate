'use client'; // Adicione isso no topo do arquivo, pois o contexto é um componente do cliente

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Biblioteca para manipular cookies no frontend

// Cria o contexto de autenticação
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Verifica se há um cookie ao carregar a página
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsAuthenticated(true);
      // Aqui você pode buscar os dados do usuário (exemplo simplificado)
      setUser({ name: 'Usuário Logado' });
    }
  }, []);

  // Função para fazer login
  const login = (token) => {
    Cookies.set('token', token, { secure: true, sameSite: 'strict' });
    setIsAuthenticated(true);
    setUser({ name: 'Usuário Logado' });
  };

  // Função para fazer logout
  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);