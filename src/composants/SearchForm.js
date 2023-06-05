import React, { useState, useEffect } from 'react';

function SearchForm() {
  const baseUrl = 'http://localhost:5000/api';
  const [ville, setVille] = useState('');
  const [villes, setVilles] = useState([]);

  const [zone, setZone] = useState('');
  const [zones, setZones] = useState([]);

  const [specialite, setSpecialite] = useState('');
  const [specialites, setSpecialites] = useState([]);

  const [restaurants, setRestaurants] = useState([]);

  /*
  const [serie, setSerie] = useState('');
  const [series, setSeries] = useState([]);
  */
  const handleVilleChange = (event) => {
    setVille(event.target.value);
     // List of zones
     fetch(`${baseUrl}/zones/city/${event.target.value}`)
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       setZones(data);
     })
     .catch((err) => {
       console.log(err.message);
     });
  };

  const handleZoneChange = (event) => {
    setZone(event.target.value);
    // List of specialities
    fetch(`${baseUrl}/specialites/zone/${event.target.value}`)
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       setSpecialites(data);
     })
     .catch((err) => {
       console.log(err.message);
     });
  };

  const handleSpecialiteChange = (event) => {
    setSpecialite(event.target.value);
  };

  /*
  const handleSerieChange = (event) => {
    setSerie(event.target.value);
  };*/

  const handleSearch = (event) => {
    event.preventDefault();
    // Effectuer la recherche ici avec les valeurs sélectionnées
    fetch(`${baseUrl}/restaurants/filter`,{
      method:'POST',
      body:JSON.stringify({
        zone:zone,
        specialite: specialite
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    })
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       setRestaurants(data);
     })
     .catch((err) => {
       console.log(err.message);
     });
  };

  useEffect(() => {
    // List of cities
    fetch(`${baseUrl}/cities`)
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setVilles(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
       
 }, []);

  return (
    <form onSubmit={handleSearch}>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="ville">Ville :</label>
          <select
            className="form-control"
            id="ville"
            value={ville}
            onChange={handleVilleChange}
          >
            <option value="">Ville</option>
            {
              villes.map((villeLoop)=>{
                return(<option key={villeLoop._id} value={villeLoop._id}>{villeLoop.name}</option>)
              })
            }
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="zone">Zone :</label>
          <select
            className="form-control"
            id="zone"
            value={zone}
            onChange={handleZoneChange}
          >
            <option value="">Zone</option>
            {
              zones.map((zoneLoop)=>{
                return(<option key={zoneLoop._id} value={zoneLoop._id}>{zoneLoop.name}</option>)
              })
            }
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="specialite">Spécialité :</label>
          <select
            className="form-control"
            id="specialite"
            value={specialite}
            onChange={handleSpecialiteChange}
          >
            <option value="">Spécialité</option>
            {
              specialites.map((specialiteLoop)=>{
                return(<option key={specialiteLoop._id} value={specialiteLoop._id}>{specialiteLoop.name}</option>)
              })
            }
          </select>
        </div>
               

        

      </div>


      <button type="submit" className="btn btn-primary">
        Rechercher
      </button>
      
      <div className="restaurant-container">
      {restaurants.map((restaurantLoop) => {
         return (
          <div className="resto-card" key={restaurantLoop._id}>
            <br></br>
            <hr></hr>
          <h2 className="resto-name">{restaurantLoop.name}</h2>
          <p className="resto-adresse">{restaurantLoop.adresse}</p>
          <img src={restaurantLoop._id + '.png'} alt="Mon Logo" />
          
       </div>
         );
      })}
   </div>

    </form>
  );
}

export default SearchForm;


