import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importez le fichier CSS des icônes de Bootstrap

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center"> {/* Ajouter la classe "text-center" pour centrer le contenu */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Informations de contact</h5>
            <p>Adresse : 7H28+C96, El Jadida</p>
            <p>Téléphone : +212 659051629</p>
            <p>Email : elharrassafaa@email.com</p>
          </div>
          <div className="col-md-4">
            <h5>Suivez-nous</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
