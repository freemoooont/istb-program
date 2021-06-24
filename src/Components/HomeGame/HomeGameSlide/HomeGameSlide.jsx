import React from 'react';
import './homegameslide.css';
import logo from "../../../assets/ИИТиАД.svg"
import burger from "../../../assets/Hamburger 2.svg";
import plus from "../../../assets/plus.svg";

function HomeGameSlide(){
    return (
        <>
            <header className="welcome--header">
                <img src={logo} alt="" className="welcome--logo"/>
                <img src={burger} alt="" className="welcome--burger"/>
            </header>
            <div className="welcome--content">
                <button className="button__wrapper">
                    <div className="button--text">
                        <h2>
                            Почему мы?
                        </h2>
                        <img src={plus} alt=""/>
                    </div>
                </button>
                <button className="button__wrapper">
                    <div className="button--text">
                        <h2>
                            О направлении
                        </h2>
                        <img src={plus} alt=""/>
                    </div>
                </button>
            </div>
        </>
    )
}

export default HomeGameSlide;
