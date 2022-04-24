import React from "react";
import "../css/vid.css";
import YoutubeEmbed from "./YoutubeEmbed";
import { CButton, CCard, CCardImage, CCardHeader, CCol, CRow } from '@coreui/react'

export default function App() {
  return (

    <div className="SM">

        <div className="containerbox0">
            <div className="SL">
            <h1>UTI</h1>
            </div>
        </div>

        <div className="containerbox0">
            <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>

        <div className="containerbox0">
            <div className="SX">
                <h3>50 miliar pertama</h3>
            </div>
        </div>
        
        <div className="containerbox9">
        <CButton color="ghost" >
            <CCardImage orientation="top" src="../foto/like.png" />
            50k
        </CButton>
        <CButton color="ghost" >
            <CCardImage orientation="top" src="../foto/dsk.png" />
            50k
        </CButton>
        <CButton color="ghost" >
            <CCardImage orientation="top" src="../foto/msg.png" />
            50k
        </CButton>
        <CButton color="ghost" >
            <CCardImage orientation="top" src="../foto/arc.png" />
        
        </CButton>
        </div>

        <div className="containerbox0">
            <div className="SS">
                <h5>Video Terkait</h5>
            </div>
        </div>

        <div className="containerbox0">
            <div className="SS">
                <img src="../foto/kras.png" alt="" />
            </div>
        </div>

        <div className="containerbox0">
            <div className="SS">
                <h6>Lihat Lebih Banyak</h6>
            </div>
        </div>

        <div className="containerbox0">
            <div className="">
                <img src="../foto/arr.png" alt="" />
            </div>
        </div>


    </div>
    
  );
}