import './mobile.css'

interface Props {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}

const Mobile: React.FC<Props> = ({ isOpen, setIsOpen}) => {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i className="fi-rr-cross-circle"></i>
    </div>
    <div className="mobile-option">
        <a href="#projects" >
          Proyectos
        </a>
    </div>
    <div className="mobile-option">
        <a href="#skills">
          Habilidades
        </a>
    </div>
    <div className="mobile-option">
        <a href="#work">
          Trabajos
        </a>
    </div>
    <div className="mobile-option">
        <a href="#contact">
          Contacto
        </a>
    </div>
  </div>
  );
}

export default Mobile;