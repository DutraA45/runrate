// app/(home)/page.js
'use client'; // Adicione isso no topo do arquivo, pois o componente usa hooks do cliente

import { useAuth } from '../context/AuthContext'; // Importe o hook useAuth
import HeroBlock from '../components/heroblock'; // Importe o HeroBlock

export default function Home() {
  const { isAuthenticated, user, logout } = useAuth(); // Use o contexto de autenticação

  return (
    <div>
      {/* Exibe o HeroBlock apenas para usuários não logados */}
      {!isAuthenticated && <HeroBlock />}

      {/* Exibe conteúdo personalizado para usuários logados */}
      {isAuthenticated && (
        <div>
          <h1>Bem-vindo de volta, {user?.name}!</h1>
          <p>Aqui estão algumas recomendações para você:</p>
          {/* Adicione conteúdo personalizado aqui */}
          <button onClick={logout}>Sair</button>
        </div>
      )}
    </div>
  );
}