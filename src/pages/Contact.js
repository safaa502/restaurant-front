import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis !');
    console.log('Nom :', name);
    console.log('Email :', email);
    console.log('Message :', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-lg-6">
        <h1>Contactez-nous</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
        
        <p> </p>
      </div>
    </div>
  );
};

export default Contact;
