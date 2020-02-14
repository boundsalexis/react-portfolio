import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
                return (

                  <nav className="navbar navbar-light light-blue lighten-4">
                  <a className="navbar-brand" href="#">Alexis Bounds</a>
                
                  <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                        className="fas fa-bars fa-1x"></i></span></button>
                
                  <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="/biography">Biography</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact Information</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">At a glance...</a>
                      </li>
                    </ul>
                
                  </div>
                
                </nav>


                )
       
}



export default Navbar;