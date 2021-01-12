import React, { useState, useEffect, useReducer } from 'react';
import './Home.css';
import reactIcon from '../../Image/react.png'
import awsIcon from '../../Image/aws.png'
import htmlIcon from '../../Image/html5.jpg'
import cssIcon from '../../Image/css.svg'
import npmIcon from '../../Image/npm.png'
import sassIcon from '../../Image/sass.svg'
import reduxIcon from '../../Image/redux.svg'
import githubIcon from '../../Image/github.webp'
import vscodeIcon from '../../Image/vscode.png'
import jsIcon from '../../Image/js.jpg'

import Resume from '../../Ballot.pdf'
import { Document, Page, ReactPDF } from 'react-pdf';

import pythonIcon from '../../Image/python.webp'
import cSharpicon from '../../Image/cSharp.svg'
import expressIcon from '../../Image/express3.Default'
import nodeJSIcon from '../../Image/node.svg'
import mongoIcon from '../../Image/mongo.webp'
import restIcon from '../../Image/rest.png'
import jsonIcon from '../../Image/json.webp'
import SQLIcon from '../../Image/sql.jpg'








const Home = (props) => {
    const [FEflipper, setFEFlipper] = useState(true);
    const [BEflipper, setBEFlipper] = useState(true);
    let FETools = [
        { Image: reduxIcon, Name: "Redux" },
        { Image: awsIcon, Name: "AWS" },
        { Image: githubIcon, Name: "GitHub" },
        { Image: vscodeIcon, Name: "VSCode" },
        { Image: npmIcon, Name: "npm" },
        { Image: sassIcon, Name: "Sass" },
    ]
    let FELanguages = [
        { Image: reactIcon, Name: "React" },
        { Image: awsIcon, Name: "AWS" },
        { Image: htmlIcon, Name: "HTML5" },
        { Image: cssIcon, Name: "CSS3" },
        { Image: jsIcon, Name: "JS" },
    ]
    let FEToolIcons = []
    let FEToolsNames = []
    for (let i = 0; i < 6; i++) {
        FEToolIcons.push(
            <div className="GridContainerImageContainter"><img className="GridIconImage" src={FETools[i].Image} /></div>
        )
        FEToolsNames.push(
            <div className="CardBackGridGridContainerGridNameName"><p>{FETools[i].Name}</p></div>
        )
    }
    let FELanguageIcons = []
    let FELanguageNames = []
    for (let i = 0; i < 5; i++) {
        FELanguageIcons.push(
            <div className="GridContainerImageContainter"><img className="GridIconImage" src={FELanguages[i].Image} /></div>
        )
        FELanguageNames.push(
            <div className="CardBackGridGridContainerGridNameName"><p>{FELanguages[i].Name}</p></div>
        )
    }


    let BETools = [
        { Image: expressIcon, Name: "Express JS" },
        { Image: awsIcon, Name: "AWS" },
        { Image: jsonIcon, Name: "JSON" },

        { Image: restIcon, Name: "REST API" }
    ]
    let BELanguages = [
        { Image: pythonIcon, Name: "Python" },
        { Image: cSharpicon, Name: "C#" },
        { Image: mongoIcon, Name: "MongoDB" },
        { Image: SQLIcon, Name: "SQL" },
        { Image: nodeJSIcon, Name: "node.js" },
        { Image: jsIcon, Name: "JS" },
    ]
    let BEToolIcons = []
    let BEToolsNames = []
    for (let i = 0; i < 4; i++) {
        BEToolIcons.push(
            <div className="GridContainerImageContainter"><img className="GridIconImage" src={BETools[i].Image} /></div>
        )
        BEToolsNames.push(
            <div className="CardBackGridGridContainerGridNameName"><p>{BETools[i].Name}</p></div>
        )
    }
    let BELanguageIcons = []
    let BELanguageNames = []
    for (let i = 0; i < 6; i++) {
        BELanguageIcons.push(
            <div className="GridContainerImageContainter"><img className="GridIconImage" src={BELanguages[i].Image} /></div>
        )
        BELanguageNames.push(
            <div className="CardBackGridGridContainerGridNameName"><p>{BELanguages[i].Name}</p></div>
        )
    }

    return (
        <div className="Home">

            <div className="Section">

                <h2>About Me</h2>
                <p>
                    adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra
                    </p>
            </div>

            <div className="Section">

                <h2>How I create my apps</h2>
                <p>
                    I use the most
                    </p>
                <div className="GridContainer Grid2 ButtonContainer">
                    <button className={!FEflipper ? "ToolButtons" : "ToolButtons ToolButtonsSelected "}
                        onClick={() => setFEFlipper(!FEflipper)}>
                        <p>View Tools</p>
                    </button>
                    <button className={FEflipper ? "ToolButtons" : "ToolButtons ToolButtonsSelected"}
                        onClick={() => setFEFlipper(!FEflipper)}>
                        <p>View Languages</p>
                    </button>
                </div>

                <div className={FEflipper ? "Card" : "Card CardFlipper"}
                    hover={FEflipper}
                >
                    <div className="CardFlip">
                        <div className="CardFlipFront">
                            <div className="GridContainer Grid6">
                                {FEToolIcons}
                                {FEToolsNames}
                            </div>
                        </div>
                        <div className="CardFlipBack CardIsGrid">
                            <div className="GridContainer Grid5">
                                {FELanguageIcons}
                                {FELanguageNames}

                            </div>
                        </div>
                    </div>
                </div>


                <div className="GridContainer Grid2 ButtonContainer">
                    <button className={!BEflipper ? "ToolButtons" : "ToolButtons ToolButtonsSelected "}
                        onClick={() => setBEFlipper(!BEflipper)}>
                        <p>View Tools</p>
                    </button>
                    <button className={BEflipper ? "ToolButtons" : "ToolButtons ToolButtonsSelected"}
                        onClick={() => setBEFlipper(!BEflipper)}>
                        <p>View Languages</p>
                    </button>
                </div>

                <div className={BEflipper ? "Card" : "Card CardFlipper"}
                    hover={BEflipper}
                >
                    <div className="CardFlip">
                        <div className="CardFlipFront">
                            <div className="GridContainer Grid4">
                                {BEToolIcons}
                                {BEToolsNames}
                            </div>
                        </div>
                        <div className="CardFlipBack CardIsGrid">
                            <div className="GridContainer Grid6">
                                {BELanguageIcons}
                                {BELanguageNames}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


        </div >
    );




}
export default Home;