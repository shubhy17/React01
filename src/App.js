import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="Navbar">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
