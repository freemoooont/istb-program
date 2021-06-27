import React from 'react';
import MainSlide from "./MainSlide/MainSlide";
import RightSlide from "./RightSlide/RightSlide";

function CourseSlide(props){
    return(
        <section className="section course--slide">
            <div className="slide">
                <MainSlide {...props}/>
            </div>
            <div className="slide">
                <RightSlide semNumber={props.sem1} subjects={props.program[0].items}/>
            </div>
            <div className="slide">
                <RightSlide semNumber={props.sem2} subjects={props.program[1].items}/>
            </div>
        </section>
    )
}

export default CourseSlide;