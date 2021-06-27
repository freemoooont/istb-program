import React from "react";
import './sidemenu.css';
import {animated, useSpring} from "react-spring";

function SideMenu({isTopSlide, isLastSlide}){

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

    const { fill } = useSpring({
        fill: (isTopSlide || isLastSlide || isOpen) ? "#fafafa" : "#000000"
    });

    const menuContainerStyle = useSpring({
        opacity: isLastSlide ? '0%' : "100%"
    })

    function onLinkClicked (index) {
        window.fullpage_api.moveTo(index, 0)
        setIsOpen(false)
    }

    return(
        <>
                <animated.div
                    style={{ right: x.to(x => `-${x}%`)}}
                    className="sidemenu-wrapper"
                >
                    <span className="sidemenu-wrapper--link" onClick={() => onLinkClicked(2)}> 1 курс </span>
                    <span className="sidemenu-wrapper--link" onClick={() => onLinkClicked(3)}> 2 курс </span>
                    <span className="sidemenu-wrapper--link" onClick={() => onLinkClicked(4)}> 3 курс </span>
                    <span className="sidemenu-wrapper--link" onClick={() => onLinkClicked(5)}> 4 курс </span>
                    <span className="sidemenu-wrapper--link" onClick={() => onLinkClicked(6)}> Контакты </span>
                </animated.div>

                <animated.div className="container container-common position-absolute w-100" style={menuContainerStyle}>
                    <header className="welcome--header justify-content-end" style={{zIndex: 1000}}>
                        <animated.svg
                            onClick={() => setIsOpen(!isOpen)}
                            width="40"
                            height="32"
                            viewBox="0 0 44 44"
                            fill={fill}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <animated.rect width="40" height="4" rx="2" style={first} />
                            <animated.rect width="40" height="4" rx="2" style={second} />
                            <animated.rect width="40" height="4" rx="2" style={third} />
                        </animated.svg>
                    </header>
                </animated.div>
        </>
    )
}

export default SideMenu;