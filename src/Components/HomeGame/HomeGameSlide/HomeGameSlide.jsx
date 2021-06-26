import React from 'react';
import './homegameslide.css';
import hand from "../../../assets/hand.svg"
import burger from "../../../assets/Hamburger 2.svg";
import all from "../../../assets/vector-all.svg";


function HomeGameSlide() {
    return (
        <>
            <div className="home-wrapper h-100">
                <img style={{ position: 'absolute', bottom: 0, width: '101%', height: '101%', objectFit: 'cover', zIndex: 0, backgroundColor: "#84CDCA" }} src={all} />
                <div className="wrapper h-100">
                    <div className="container h-100 container--header">
                        <header className="welcome--header">
                            <span className="welcome--logo">ИИТИАД</span>
                            <img src={burger} alt="" className="welcome--burger" />
                        </header>

                        <div className="welcome--info">
                            Поступай на <br />
                            "Информаци-<br/>-онные <br /> 
                            системы и технологии  <br />
                            в админ.  <br />
                            управлении"
                        </div>
                    </div>

                    <div className="hand--icon--wrapper">
                    <img className="hand--icon" src={hand} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeGameSlide;
