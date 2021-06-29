import React from 'react';
import './footerslide.css';
import N from "../../assets/N.png";
import V from "../../assets/V.png";
import Nik from "../../assets/Nik.png";
import logo from "../../assets/logo.svg";
import {useSpring, animated} from "react-spring";

function FooterSlide() {
    const abobaStyle = useSpring({
        loop: true,
        from: {transform: `rotate(0deg)`},
        to: [
            {transform: `rotate(359deg)`},
        ],
    })

    const [abobaClicked, setAbobaClicked] = React.useState(false);

    return (

        <section className="section">
            <div className="container container-common h-100">
                <div className="d-flex flex-column align-items-center h-100">
                    <div className="text--end text-center">
                        Заинтересован? <br/>
                        Тогда подавай <br/>
                        документы <br/>
                        до 26 июля <br/>
                        в политехе
                        или дистанционно
                    </div>

                    <a href="https://cis.istu.edu/pub/auth" target="_blank" className="btn btn--end">Подать
                        документы <br/> <span className="text-mini--btn">на направление 09.03.02</span></a>

                    <div className="flex-grow-1"/>

                    <div className="row">
                        <div className="col text-center">
                            <div className="text-mini">
                                сайт был разработан при поддержке&nbsp;
                                <a href="http://www.istu.edu/deyatelnost/obrazovanie/instituty/iit/cpi/default" target="_blank">
                                    центра программной инженерии ИрНИТУ
                                </a>, командой:
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col--photo d-flex justify-content-between">
                            <a href="https://vk.com/homoboii"><img className="photo" src={Nik}/></a>
                            <a href="https://vk.com/id305264077"><img className="photo" src={V}/></a>
                            <a href="https://vk.com/neytllas"><img className="photo" src={N}/></a>
                        </div>
                    </div>

                    <div className="row row--logo align-items-center ">
                        <div className="col-auto logo--text">
                            ДИЗАЙН И <br/> РАЗРАБОТКА
                        </div>
                        <div className="col">
                            <animated.img className="photo logo"
                                          style={abobaClicked ? abobaStyle : {}}
                                          onClick={() => setAbobaClicked(!abobaClicked)}
                                          src={logo}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSlide;