import { useState, useEffect } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm fixed-top`}>
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-4" href="#">Emenlentino</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item d-flex align-items-center">
              <div className="form-check form-switch ms-3">
                <input className="form-check-input" type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <label className="form-check-label">{darkMode ? 'Dark' : 'Light'}</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
