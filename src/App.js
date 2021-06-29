import './App.css';
import BirdsList from './components/BirdsList.js'
import AmphibiansList from './components/AmphibiansList.js'
import FishesList from './components/FishesList.js'
import InsectsList from './components/InsectsList.js'
import MammalsList from './components/MammalsList.js'
import ReptilesList from './components/ReptilesList.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (
    <div>
      <h1>Endanged Species in Ontario</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/amphibian">Amphibian</Link>
              </li>
              <li>
                <Link to="/bird">Bird</Link>
              </li>
              <li>
                <Link to="/fish">Fish</Link>
              </li>
              <li>
                <Link to="/insect">Insect</Link>
              </li>
              <li>
                <Link to="/mammal">Mammal</Link>
              </li>
              <li>
                <Link to="/reptile">Reptile</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/amphibian">
              <Amphibian />
            </Route>
            <Route path="/bird">
              <Bird />
            </Route>
            <Route path="/fish">
              <Fish />
            </Route>
            <Route path="/insect">
              <Insect />
            </Route>
            <Route path="/mammal">
              <Mammal />
            </Route>
            <Route path="/reptile">
              <Reptile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}
function Amphibian() {
  return <AmphibiansList />;
}
function Bird() {
  return <BirdsList />;
}
function Fish(){
  return <FishesList />;
}
function Insect(){
  return <InsectsList />;
}
function Mammal(){
  return <MammalsList />;
}
function Reptile(){
  return <ReptilesList />;
}




export default App;
