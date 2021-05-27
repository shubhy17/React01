import { NavLink } from 'react-router-dom';
import logo from '../images/logo1.jpeg'

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="LOGO" />IMONSAR
  </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link " to="/"><button type="button" className="btn btn-outline-primary">Home</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services"><button type="button" className="btn btn-outline-primary">Services</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus"><button type="button" className="btn btn-outline-primary">AboutUs</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact"><button type="button" className="btn btn-outline-primary">ContactUs</button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" to="#"><button type="button" className="btn btn-outline-primary">Review</button></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
