import { useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };
  return (
    <nav className="navbar">
      <ul className="links">
        <li
          className={`link ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => scrollToSection('home')}>
          Главная
        </li>
        <li
          className={`link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => scrollToSection('about')}>
          О нас
        </li>
        <li
          className={`link ${activeSection === 'news' ? 'active' : ''}`}
          onClick={() => scrollToSection('news')}>
          Новости
        </li>
        <li
          className={`link ${activeSection === 'catalog' ? 'active' : ''}`}
          onClick={() => scrollToSection('catalog')}>
          Каталог
        </li>
      </ul>
    </nav>
  );
}
