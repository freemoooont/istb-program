import React from 'react';
import hashtag from "../../../assets/hashtag.svg"
import calculator from "../../../assets/calculator.svg";
import "./mainslide.css";


function MainSlide({courseNumber, program}){
    console.log('Изменил в dev')
    return(
        <>
            <div className="wrapper container">
                <div className="course--number">
                    <h1>
                    {courseNumber} курс
                    </h1>
                </div>

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"></div>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div> 

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"></div>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div> 

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"></div>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div> 

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"></div>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div> 

            </div>
        </>
    )
}

export default MainSlide;