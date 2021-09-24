import {Route, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
      

      
    </div>
  );
}

export default App;
