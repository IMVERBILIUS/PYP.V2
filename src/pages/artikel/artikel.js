import React, {Component} from "react";

import Feature from "../../Component_6/Hero";
import landingPage from "../../json/LandingPage.json";




export default class Investasi extends Component {
    render() {
      return (
        
          <Feature
            refUvest={this.refUvest}
            data={landingPage.uvest}
          />
          
        
    
      );
    }
  }