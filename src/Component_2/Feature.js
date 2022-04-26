import React from "react";
import "../content.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Feature = (props) => {
    return <React.Fragment>
                <div className="atas">
                    <h2>uVest</h2>
                </div>
        {props.data.map((item, index) => {
            return (
                <div ref={props.refUvest}  key={index}>
                
                    {/* <div className="containerbox2">
                        <img src={item.imageUrl} alt=""></img>
                            <h5>{item.title}</h5>
                    </div> */}
                    
                    <div className="foto2">
                    <Link to="/Tampilan">
                        <img  src={item.imageUrl}  alt="" ></img>
                        </Link>
                    </div>  
                    <div className="label4">
                        
                        <div className="label2">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                
                
        </div>
            );
          })}


        
    </React.Fragment>
};


export default Feature;