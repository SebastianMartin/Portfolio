import React, { useState, useEffect, useReducer } from 'react';
import './Main.css';
import Header from './../Header/Header'
import Home from './../Home/Home'
const Main = (props) => {


    return (
        <div className="Main">
            <Header />
            <br />
            <Home/>

        </div >
    );




}
export default Main;