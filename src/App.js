import {Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  const [contact, setContact] = useState(false)

  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
      <div className="contact-btn-container">
        <button 
          onClick={() => setContact(!contact)}
          className="contact-btn">
          Contact me
        </button>
        {contact ? <Contact /> : null}
      </div>
      <Footer />
    
    </div>
  );
}

export default App;
