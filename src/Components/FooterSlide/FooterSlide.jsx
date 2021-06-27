import React from 'react';
import './footerslide.css';
import N from "../../assets/N.svg";
import V from "../../assets/V.svg";
import Nik from "../../assets/Nik.svg";
import logo from "../../assets/logo.svg";

function FooterSlide() {
    return (

        <section className="section">
            <div className="container container-common h-100">
                <div className="d-flex flex-column align-items-center h-100">
                    <div className="text--end text-end">
                        Заинтересован? <br/>
                        Тогда подавай <br/>
                        документы <br/>
                        до 26 июля <br/>
                        в политехе
                        или дистанционно
                    </div>

                    <a href="https://cis.istu.edu/pub/auth" target="_blank" className="btn btn--end">Подать документы</a>

                    <div className="flex-grow-1"/>

                    <div className="row">
                        <div className="col text-center">
                            <div className="text-mini">
                                сайт был разработан за 7 дней в рамках айти-марафона <br/> вот этими людьми:
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col--photo d-flex justify-content-between">
                            <img className="photo" src={Nik}/>
                            <img className="photo" src={V}/>
                            <img className="photo" src={N}/>
                        </div>
                    </div>

                    <div className="row row--logo align-items-center ">
                        <div className="col-auto logo--text">
                            DESIGN & PROGRAMMING BY
                        </div>
                        <div className="col ">
                            <img className="photo logo" src={logo}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSlide;