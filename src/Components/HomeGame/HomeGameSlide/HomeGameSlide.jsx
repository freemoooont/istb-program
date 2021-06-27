import React from 'react';
import './homegameslide.css';
import hand from "../../../assets/hand.svg"
import all from "../../../assets/vector-all.svg";
import { useSpring, animated } from 'react-spring'
// import {Menu} from "../../index";


function HomeGameSlide() {
    const stickStyles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee', transform: `translate(0px, -30px)` },
            { opacity: 0, color: 'rgb(14,26,19)'},
        ],
        from: { opacity: 0, color: 'red', transform: `translate(0px, 0px)` },
    })

    const [isOpen, setIsOpen] = React.useState(false);

    const first = useSpring({
        transform: isOpen
            ? "translate(5px, 32px) rotate(-45deg)"
            : "translate(2px, 7px) rotate(0deg)"
    });
    const second = useSpring({
        transform: isOpen
            ? "translate(10px, 4px) rotate(45deg)"
            : "translate(2px, 19px) rotate(0deg)"
    });
    const third = useSpring({
        transform: isOpen
            ? "translate(5px, 32px) rotate(-45deg)"
            : "translate(2px, 31px) rotate(0deg)"
    });

    const { x } = useSpring({
        x: isOpen ? 0 : 100
    })

    return (
        <>
            <div className="home-wrapper h-100">
                <img style={{ position: 'absolute', bottom: 0, width: '101%', height: '101%', objectFit: 'cover', zIndex: 0, backgroundColor: "#84CDCA" }} src={all} />
                <div className="wrapper h-100">
                    <div className="container h-100 container--header">
                        <header className="welcome--header">
                            <span className="welcome--logo">ИИТИАД</span>
                            <svg
                                onClick={() => setIsOpen(!isOpen)}
                                width="40"
                                height="32"
                                viewBox="0 0 44 44"
                                fill="#fafafa"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <animated.rect width="40" height="4" rx="2" style={first} />
                                <animated.rect width="40" height="4" rx="2" style={second} />
                                <animated.rect width="40" height="4" rx="2" style={third} />
                            </svg>
                        </header>

                        <div className="welcome--info">
                            Поступай на <br />
                            "Информаци-<br/>-онные <br /> 
                            системы и технологии  <br />
                            в админ.  <br />
                            управлении"
                        </div>
                    </div>
                    {/*Вот здесь блок с меню, который надо воткнуть нормально*/}
                    <animated.div
                        style={{ transform: x.interpolate(x => `translate3d(${x* -1}%, 0, 0)`)}}
                        className="welcome--menu__test"
                    />

                    <div className="hand--icon--wrapper">
                        <animated.img style={stickStyles} className="hand--icon" src={hand}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeGameSlide;
