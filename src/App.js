import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './composants/Header';
import Footer from './composants/Footer';
import Accueil from './pages/Acceuil';
import APropos from './pages/APropos';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/contact" component={Contact} />
      </Switch>
      
      <Footer />
    </Router>
  );
};

export default App;