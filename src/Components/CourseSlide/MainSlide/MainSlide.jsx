import React from 'react';
import "./mainslide.css";
import ReactECharts from 'echarts-for-react';
import _ from "lodash";

const COLORS_MAP = {
    "АйТи" : "#ee6666",
    "Общая подготовка" : "#fac858",
    "Иностранный язык" : "#ff68aa",
    "Математика" : "#5470c6",
    "Гуманитарные науки" : "#91cc75",
    "Практика" : "#73c0de"
}

function MainSlide({courseNumber, program}) {
    const [arr1, arr2] = program.map(obj => obj.items);

    const categoryWithCount = _.countBy(_.concat(arr1, arr2), 'category');
    console.log(categoryWithCount);
    const categoriesName = _(categoryWithCount).keys().sortBy(x => -categoryWithCount[x]).value();


    const data = categoriesName.map((name) => {
        return ({
            itemStyle: {color: COLORS_MAP[name]},
            value: categoryWithCount[name],
            selected: name === "АйТи",
            name,
        })
    })

    console.log(data);

    const option = {
        series: [
            {
                name: `${courseNumber} курс`,
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'normal'
                    }
                },
                labelLine: {
                    show: false
                },
                data
            }
        ]
    }


    return (
        <>
            <div className="wrapper container ">
                <div className="course--number">
                    <h1>
                        {courseNumber} курс
                    </h1>
                </div>
                <div className="d-flex flex-column h-100">
                    {categoriesName.map(
                        (name, idx) =>
                            <div key={idx} className="row align-items-center row--legend">
                                <div className="col-auto">
                                    <div style={{background: COLORS_MAP[name]}} className="item--legend"/>
                                </div>
                                <div className="col ps-0 text--legend">
                                    {name}
                                </div>
                            </div>
                    )}
                    <div className="flex-grow-1 d-flex align-items-center">
                        <div className="chart w-100">
                            <ReactECharts className="h-100"
                                option={option}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainSlide;