import React from 'react';
import './practiceslide.css';
// import en from "../../assets/en.jpg";
// import forus from "../../assets/forus.jpg";
// import gaz from "../../assets/gaz.jpg";
// import irkut from "../../assets/irkut.jpg";
// import isp from "../../assets/isp.jpg";
// import krok from "../../assets/krok.jpg";
// import sber from "../../assets/sber.png";
// import vds from "../../assets/vds.jpg";
// import yan from "../../../assets/yan.png";

function PracticeSlide() 
{
    return (
        <section className="section work--practice--slide">
            <div className="wrapper container container-common">
                <div className="title--practice">
                    <h1>
                        Проходи практику у лучших партнеров нашего ВУЗа
                    </h1>
                </div>

                <div className="container">
                        <div className="row justify-content-center mt-3 ml-3">
                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={yan}/> */}
                                <img src="/assets/yan.png" alt="" />
                            </div>

                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={vds}/> */}
                                <img src="/assets/vds.jpg" alt="" />
                            </div>

                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={sber}/> */}
                                <img src="/assets/sber.png" alt="" />
                            </div>
                        </div>

                        <div className="row justify-content-center mt-3 ml-3">
                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={krok}/> */}
                                <img src="/assets/krok.jpg" alt="" />
                            </div>

                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={en}/> */}
                                <img src="/assets/en.jpg" alt="" />
                            </div>

                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={isp}/> */}
                                <img src="/assets/isp.jpg" alt="" />
                            </div>
                        </div>

                        <div className="row justify-content-center mt-3 ml-3">
                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={irkut}/> */}
                                <img src="/assets/irkut.jpg" alt="" />
                            </div>

                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={gaz}/> */}
                                <img src="/assets/gaz.jpg" alt="" />
                            </div>

                            <div className="col-4">
                                {/* <img style="max-width: 100%;" src={forus}/> */}
                                <img src="/assets/forus.jpg" alt="" />
                            </div>
                        </div>
                </div>

            </div>
        </section>
    )
}

export default PracticeSlide;