import React from 'react';
import MainSlide from "./MainSlide/MainSlide";
import RightSlide from "./RightSlide/RightSlide";
import TwoRightSlide from "./TwoRightSlide/TwoRightSlide";

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
                <div className="slide">
                    <TwoRightSlide {...props}/>
                </div>
            </section>
        </>
    )
}

export default CourseSlide;