import React from 'react';
import './practiceslide.css';
import en from "../../assets/en.png";
import forus from "../../assets/forus.png";
import gaz from "../../assets/gaz.png";
import irkut from "../../assets/irkut.png";
import isp from "../../assets/isp.png";
import krok from "../../assets/krok.png";
import sber from "../../assets/sber.png";
import vds from "../../assets/vds.png";
import yan from "../../assets/yan.png";
import mts from "../../assets/mts.png";
import adikt from "../../assets/adikt.png";
import tele from "../../assets/tele.png";

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
                        <div className="row row--logo--company justify-content-center mt-3 ml-3">
                            <div className="col-4 col-md-4 col-lg-2">
                                <img className="company--logo" src={yan}/> 
                            </div>

                            <div className="col-4 col-md-4 col-lg-2">
                                <img className="company--logo" src={vds}/> 
                            </div>

                            <div className="col-4 col-md-4 col-lg-2">
                                <img className="company--logo" src={sber}/>
                            </div> 
                    
                            <div className="col-4 col-md-4 col-lg-2">
                                 <img className="company--logo" src={krok}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2">
                                 <img className="company--logo" src={en}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2">
                                 <img className="company--logo" src={isp}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2 mt-3">
                                 <img className="company--logo" src={irkut}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2 mt-3">
                                 <img className="company--logo" src={gaz}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2 mt-3">
                                 <img className="company--logo" src={forus}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2 mt-3">
                                 <img className="company--logo" src={mts}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2 mt-3">
                                 <img className="company--logo" src={tele}/>
                            </div>

                            <div className="col-4 col-md-4 col-lg-2 mt-3">
                                 <img className="company--logo" src={adikt}/>
                            </div>  
                        </div>  
                </div>

            </div>
        </section>
    )
}

export default PracticeSlide;