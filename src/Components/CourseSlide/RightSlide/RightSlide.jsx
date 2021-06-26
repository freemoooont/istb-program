import React from 'react';
import './rightslide.css';

function RightSlide({subjects}) {
    return (
        <>
            <div className="wrapper">
                <h2>
                    Пацанский график
                </h2>
                <ul>
                    {
                        subjects.map(
                            (item,idx) =>
                                <li key={idx} >
                                    {item.title}
                                </li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default RightSlide;