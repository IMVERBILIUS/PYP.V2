import React from "react";
import "../css/vid.css";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  CCarousel,
  CCarouselItem,

} from '@coreui/react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




const Feature = () => {
    return <React.Fragment>
<div className="OP">
        <div className="containerbox0">
            <div className="SL">
            <h1>Reksadana Pasar Uang</h1>
            </div>
        </div>
        <div className="TY">



</div>



        <div className="containerbox0">
            <div className="QQ">
                <img src="../foto/KB.png" alt="" />
            </div>
        </div>



        <div className="containerbox0">
            <div className="QQ">
            <div className="WE">
                <img src="../foto/GB.png" alt="" />
                </div>
            </div>
        </div>

</div>




        
    </React.Fragment>
};


export default Feature;