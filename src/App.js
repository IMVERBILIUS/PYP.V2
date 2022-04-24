import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

import LandingPage from "./pages/LandingPages/LandingPage"
import "./nav.css";
import Navbar from "./Component/navbar"
import Invest from "./pages/investasi/Investasi";
import Setting from "./pages/Setting/Setting"
import Course from "./pages/Course/Course"
import Class from "./pages/class/class"
import Artikel from "./pages/artikel/artikel"


export default function App() {
  return (
    <Router>
      <div>


        <Navbar />
    
        <Switch>
        <Route path="/artikel" >
            <Artikel />
          </Route>
          <Route path="/class" >
            <Class />
          </Route>
        <Route path="/Course">
          <Course />
            </Route>
          <Route path="/invest">
            <Invest />
          </Route>
          <Route path="/users">
            <Setting />
          </Route>
          <Route path="/" >
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

