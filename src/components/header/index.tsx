import { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Tema ${isDark ? "oscuro" : "claro"}`}
          aria-pressed={isDark}
          title={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
        >
          <i className={`fi-rr-${isDark ? "sun" : "moon"}`} aria-hidden="true"></i>
        </button>
        <div className="mobile-menu">
          <button
            className="menu-trigger"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <i className="fi-rr-apps menu-icon"></i>
          </button>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;