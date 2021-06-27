import React from 'react';
import './rightslide.css';

function RightSlide({ subjects }) {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="text--semestr">Семестр</div>

                    <div className="row align-items-center row--subject">
                        <div className="col-auto">
                            <div className="col--subject text--subject">
                                Математика
                            </div>
                        </div>   
                    </div>

                    <div className="row align-items-center row--subject">
                        <div className="col-auto">
                            <div className="col--subject text--subject">
                                Иностранный язык
                            </div>
                        </div>   
                    </div>

                    <div className="row align-items-center row--subject">
                        <div className="col-auto">
                            <div className="col--subject text--subject">
                                Программирование 
                            </div>
                        </div>   
                    </div>

                    

                    <ul>
                        {
                            subjects.map(
                                (item, idx) =>
                                    <li key={idx} >
                                        {item.title}
                                    </li>)
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}

export default RightSlide;