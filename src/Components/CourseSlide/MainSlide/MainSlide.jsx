import React from 'react';
import "./mainslide.css";
import ReactECharts from 'echarts-for-react';
import _ from "lodash";

const COLORS_MAP = {
    "Математика" : "#5470c6",
    "Гуманитарные науки" : "#91cc75",
    "Общая подготовка" : "#fac858",
    "АйТи" : "#ee6666",
    "Практика" : "#73c0de"
}

function MainSlide({courseNumber, program}) {
    const [arr1, arr2] = program.map(obj => obj.items);

    const categoryWithCount = _.countBy(_.concat(arr1, arr2), 'category');
    const categoriesName = _.keys(categoryWithCount);


    const data = categoriesName.map((name) => {
        return ({
            itemStyle: {color: COLORS_MAP[name]},
            value: categoryWithCount[name],
            name
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
        <div className="wrapper container">
            <div className="course--number">
                <h1>
                    {courseNumber} курс
                    </h1>
                </div>

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"/>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div>

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"/>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div>

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"/>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div>

             <div className="row align-items-center row--legend">
                 <div className="col-auto">
                    <div className="item--legend"/>
                 </div>
                 <div className="col ps-0 text--legend">
                 Гуманитарные науки
                 </div>
             </div>

            </div>
            <div className="chart">
                <ReactECharts
                    option={option}
                />
            </div>
    </>

    )
}

export default MainSlide;