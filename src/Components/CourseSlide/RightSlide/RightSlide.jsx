import React from 'react';
import './rightslide.css';
import _ from "lodash";
import {COLORS_MAP} from "../../../consts";

function RightSlide({semester, subjects }) {
    return (
        <div className="wrapper container container-common">
            <div className="text--semestr">{semester} семестр</div>
            {
                _(subjects).sortBy(x => x.title).map(
                    (item, idx) => (
                        <div key={idx} className="row flex-nowrap align-items-center row--subject">
                            <div className="col-auto pe-0">
                                <div style={{
                                    width: "15px",
                                    height: "15px",
                                    backgroundColor: COLORS_MAP[item.category],
                                    borderRadius: "50%"}}></div>
                            </div>
                            <div className="col-auto flex-shrink-1">
                                <div className="col--subject text--subject">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        </div>
                    )
                ).value()}
        </div>
    )
}

export default RightSlide;