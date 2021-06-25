import React from 'react';
import './homegameslide.css';
import logo from "../../../assets/ИИТиАД.svg"
import burger from "../../../assets/Hamburger 2.svg";
import plus from "../../../assets/plus.svg";
import bottom from "../../../assets/vector-bottom.svg";
import left from "../../../assets/vector-left.svg";
import right from "../../../assets/vector-right.svg";
import all from "../../../assets/vector-all.svg";


function HomeGameSlide() {
    return (
        <>
            <div className="home-wrapper h-100">
                <img style={{position: 'absolute', bottom: 0, width: '101%', height: '101%', objectFit: 'cover', zIndex: 0, backgroundColor: "#84CDCA"}} src={all}  />
                {/* <img style={{position: 'absolute', left: 0, height: '100%'}} src={left} alt="" />
                <img style={{position: 'absolute', right: 0 , height: '100%'}} src={right} alt="" /> */}
                <div className="wrapper">
                    <header className="welcome--header">
                        <img src={logo} alt="" className="welcome--logo" />
                        <img src={burger} alt="" className="welcome--burger" />
                    </header>
                    <div>Test</div>
                </div>
            </div>
        </>
    )
}

export default HomeGameSlide;
