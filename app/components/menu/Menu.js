// app/components/menu/Menu.js
'use client';

import { useState } from 'react';
import MenuDropdown from './MenuDropdown';
import styles from './Menu.module.css';

export default function Menu() {
  const [openSection, setOpenSection] = useState(null);

  const masculinoItems = [
    { href: '/masculino/tenis', label: 'Tênis' },
    { href: '/masculino/camisetas', label: 'Camisetas' },
    { href: '/masculino/shorts', label: 'Shorts' },
    { href: '/masculino/acessorios', label: 'Acessórios' },
  ];

  const femininoItems = [
    { href: '/feminino/tenis', label: 'Tênis' },
    { href: '/feminino/camisetas', label: 'Camisetas' },
    { href: '/feminino/shorts', label: 'Shorts' },
    { href: '/feminino/acessorios', label: 'Acessórios' },
  ];

  const handleSectionClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <nav className={styles.menu}>
      {/* Seção "Para Você" */}
      <MenuDropdown
        title="Para Você"
        items={[
          { href: '/novidades', label: 'Novidades' },
          { href: '/melhores-tenis', label: 'Melhores Tênis' },
          { href: '/melhores-itens', label: 'Melhores Itens Avaliados' },
        ]}
        isOpen={openSection === 'para-voce'}
        onClick={() => handleSectionClick('para-voce')}
      />

      {/* Seção "Masculino" */}
      <MenuDropdown
        title="Masculino"
        items={masculinoItems}
        isOpen={openSection === 'masculino'}
        onClick={() => handleSectionClick('masculino')}
      />

      {/* Seção "Feminino" */}
      <MenuDropdown
        title="Feminino"
        items={femininoItems}
        isOpen={openSection === 'feminino'}
        onClick={() => handleSectionClick('feminino')}
      />
    </nav>
  );
}