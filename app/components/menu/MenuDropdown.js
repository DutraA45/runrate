'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

export default function MenuDropdown({ title, items, isOpen, onClick }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle} onClick={onClick}>
        {title} {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <ul className={styles.sectionList}>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}