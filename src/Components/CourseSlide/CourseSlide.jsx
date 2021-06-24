import React from 'react';

function CourseSlide({courseNumber, program}){
    return(
        <section className="section course--slide">
            <h1>{courseNumber} курс</h1>
        </section>
    )
}

export default CourseSlide;