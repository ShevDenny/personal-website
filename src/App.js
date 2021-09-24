import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
      

      
    </div>
  );
}

export default App;
