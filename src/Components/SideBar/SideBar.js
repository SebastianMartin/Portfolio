import React, { useState, useEffect } from 'react';
import './SideBar.css';
import Person from '../../Image/beer.jpg'

const SideBar = (props) => {

    return (
        <div className="SideBarContainer">
            <div className="SideBarItemsContainer">
                <div className="SideBarContainerLeftColumnBuffer">

                </div>
                <p>
                    Home
                </p>
                <p>
                    Resume
                </p>
                <p>
                    Contact
                </p>
                <p>
                    About
                </p>

            </div>





            {/* <img
                    className="SideBarUserPicture"
                    src={Person}
                    alt="Not Found" /> */}

        </div>
    );




}
export default SideBar;