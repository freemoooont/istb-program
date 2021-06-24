import React from 'react';
import hashtag from "../../../assets/hashtag.svg"
import calculator from "../../../assets/calculator.svg";
import "./mainslide.css";


function MainSlide({courseNumber, program}){

    return(
        <>
        <div className="container">
            <div className="course--number">
                <h1>
                {courseNumber} курс
                </h1>
            </div>


            <div className="first--block">
                <span><img src={hashtag} alt="" className="img" /></span>
                <span className="text--lesson">Кодим на C++</span>
            </div>

            <div className="other--block">
                <span><img src={calculator} alt="" className="img" /></span>
                <span className="text--lesson">Изучаем математику</span>
            </div>

            <div className="other--block">
                <span><img src={hashtag} alt="" className="img" /></span>
                <span className="text--lesson">Кодим на C++</span>
            </div>

            <div className="other--block">
                <span><img src={calculator} alt="" className="img" /></span>
                <span className="text--lesson">Изучаем математику</span>
            </div>

            <button className="btn--all--lessons">Просмотреть все предметы</button>

        </div>
        </>
    )
}

export default MainSlide;