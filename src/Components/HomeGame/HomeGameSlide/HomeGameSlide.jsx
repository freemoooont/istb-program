import React from 'react';
import './homegameslide.css';
import hand from "../../../assets/hand.svg"
import all from "../../../assets/vector-all.svg";
import { useSpring, animated } from 'react-spring'


function HomeGameSlide() {
    const stickStyles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee', transform: `translate(0px, -30px)` },
            { opacity: 0, color: 'rgb(14,26,19)'},
        ],
        from: { opacity: 0, color: 'red', transform: `translate(0px, 0px)` },
    })


    return (
        <>
            <div className="home-wrapper h-100">
                <img style={{ position: 'absolute', bottom: 0, width: '101%', height: '101%', objectFit: 'cover', zIndex: 0, backgroundColor: "#84CDCA" }} src={all} />
                <div className="wrapper h-100">
                    <div className="container h-100 container--header">
                        <header className="welcome--header" >
                            <span className="welcome--logo">ИИТИАД</span>
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
                        <animated.img style={stickStyles} className="hand--icon" src={hand}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeGameSlide;
