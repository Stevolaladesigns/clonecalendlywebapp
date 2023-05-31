import React from "react";
import {BrowserRouter as Router ,Routes, Route, Link} from "react-router-dom"
import Home from './Componets/Home';
import Enterprise from "./Componets/Enterprise";
import Individuals from "./Componets/Individuals";
import Teams from "./Componets/Teams";


function Routing () {
    return (
        <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div style={{ display: "flex", marginTop: "20px" }}>
                <nav className="topp navbar">
                  <Link to="/"><img src="image/logo.png" alt="" style={{ height: "120px", width: "130px" }} /></Link>
                  <Link to="/individuals">Individuals</Link>
                  <Link to="/teams">Teams</Link>
                  <Link to="/enterprise">Enterprise</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/individuals" element={<Individuals/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/enterprise" element={<Enterprise/>} />
        </Routes>

      </Router>

    );
  }
  
  export default Routing;