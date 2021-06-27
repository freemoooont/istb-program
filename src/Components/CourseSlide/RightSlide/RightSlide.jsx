import React from 'react';
import './rightslide.css';

function RightSlide({semNumber, subjects }) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="text--semestr">{semNumber} cеместр</div>
                {
                    subjects.map(
                        (item, idx) => (
                            <div key={idx} className="row align-items-center row--subject">
                                <div className="col-auto">
                                    <div className="col--subject text--subject">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
            </div>
        </div>
    )
}

export default RightSlide;