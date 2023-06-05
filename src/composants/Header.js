import React from 'react';
import restaulogo from '../composants/restaulogo.png'; // Remplacez le chemin avec le chemin de votre image

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9">
            <nav className="navbar navbar-expand-md navbar-dark">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-0">
                  <a href="/" className="nav-link">
                    <img src={restaulogo} alt="Mon Logo" /> {/* Utilisez votre image importée comme logo */}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">Accueil</a>
                </li>
                <li className="nav-item">
                  <a href="/a-propos" className="nav-link">A propos</a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
