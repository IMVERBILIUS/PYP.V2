import React, {Component} from "react";

import Feature from "../../Component_6/Hero";
import landingPage from "../../json/LandingPage.json";
import Navbar from "../../Component/navbar";




export default class Investasi extends Component {
    render() {
      return (
          <div>
          
        
          <Feature
            refUvest={this.refUvest}
            data={landingPage.uvest}
          />
          <Navbar/>
          </div>
        
    
      );
    }
  }