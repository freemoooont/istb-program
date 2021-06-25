import React from 'react';
import MainSlide from "./MainSlide/MainSlide";
import RightSlide from "./RightSlide/RightSlide";

function CourseSlide(props){
    console.log('Develop branch');

    return(
        <>
        <section className="section course--slide">
            <div className="slide">
                <MainSlide {...props}/>
            </div>
            <div className="slide">
                <RightSlide {...props}/>
            </div>           
        </section>

        

        </>
    )
}

export default CourseSlide;