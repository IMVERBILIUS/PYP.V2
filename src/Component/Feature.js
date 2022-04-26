import React from "react";
import "../nav.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Feature = (props) => {
    return <React.Fragment>
           

        {props.data.map((item, index) => {
            return (
                <div className="SOP">
                <div ref={props.refInformation} className="main" key={index}>
                
                    <div className="containerbox2">
                    <Link to="/Tasi">
                        <img src={item.imageUrl} alt=""></img>
                        </Link>
                            <h5>{item.title}</h5>
                    </div>
                    </div>
        </div>
            );
          })}

      
        
    </React.Fragment>
};


export default Feature;