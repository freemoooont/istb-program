import React from 'react';
import MainSlide from "./MainSlide/MainSlide";
import RightSlide from "./RightSlide/RightSlide";

function CourseSlide(props){
    return(
        <>
            <section className="section course--slide">
                <div className="slide">
                    <MainSlide {...props}/>
                </div>
                <div className="slide">
                    <RightSlide {...props}/>
                </div>
                {/*<div className="container">*/}
                {/*    <button className="chart--lessons">Просмотреть все предметы</button>*/}
                {/*</div>*/}
            </section>
        </>
    )
}

export default CourseSlide;