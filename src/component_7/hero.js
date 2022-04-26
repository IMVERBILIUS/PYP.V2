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
            <h1>UTI</h1>
            </div>
        </div>
        <div className="TY">


<div className="SA1">

    <input
    type="text"
    className="SA"
    placeholder="Search uCourse"/>
</div>
</div>



        <div className="containerbox0">
            <div className="QQ">
                <img src="../foto/invest6.png" alt="" />
            </div>
        </div>
        <div className="containerbox0">
            <div className="SQ">
            <div className="AWQ">
                <img src="../foto/KM.png" alt="" />
            </div>

            </div>
        </div>

        <div className="containerbox0">
            <div className="QQ">
                <img src="../foto/MNL.png" alt="" />
            </div>
        </div>
        <div className="containerbox0">
            <div className="SQ">
            <div className="AWQ">
                <img src="../foto/KM.png" alt="" />
            </div>

            </div>
        </div>

        <div className="containerbox0">
            <div className="QQ">
                <img src="../foto/KOK.png" alt="" />
            </div>
        </div>
        <div className="containerbox0">
            <div className="SQ">
            <div className="AWQ">
                <img src="../foto/KM.png" alt="" />
            </div>

            

            </div>
        </div>

        <div className="containerbox0">
            <div className="QQ">
                <img src="../foto/dons.png" alt="" />
            </div>
        </div>
        <div className="containerbox0">
            <div className="SQ">
            <div className="AWQ">
                <img src="../foto/KM.png" alt="" />
            </div>

            </div>
        </div>
</div>




        
    </React.Fragment>
};


export default Feature;