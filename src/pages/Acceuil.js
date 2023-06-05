import React from 'react';
import SearchForm from '../composants/SearchForm';
import '../App.css';

const Accueil = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div>
     <div className="image-container">
     <img width="100%" height="700px" src="/res2.jpg" alt="Mon image" />
     <h1 className="bienvenu">Bienvenu dans notre application de restaurant</h1>
     <button  className="button-overlay" onClick={handleClick}>Défiler vers le bas</button>
      </div>
      <SearchForm />
      
     </div>
    

 
  );
};

export default Accueil;
