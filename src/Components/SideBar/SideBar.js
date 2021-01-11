import React, { useState, useEffect } from 'react';
import './SideBar.css';
import Person from '../../Image/beer.jpg'

const SideBar = (props) => {

    return (
        <div className="SideBarContainer">
            <div className="SideBarUserPicture">
                <div className="SideBarUserPictureBackground">
                <img
                    className="SideBarUserPictureImage"
                    src={Person}
                    alt="Not Found" />
                </div>
                
               
            </div>

            <div className="SideBarContainerGrid">
                <div className="SideBarContainerLeftColumn">
                    <div className="SideBarContainerLeftColumnBuffer">

                    </div>
                    <p>
                        Home
                        </p>
                    <p>
                        Teaching
                        </p>
                    <p>
                        Resume
                        </p>
                    <p>
                        About
                        </p>

                </div>
                <div className="SideBarContainerRightColumn">

                </div>

            </div>

            {/* <img
                    className="SideBarUserPicture"
                    src={Person}
                    alt="Not Found" /> */}

        </div>
    );




}
export default SideBar;