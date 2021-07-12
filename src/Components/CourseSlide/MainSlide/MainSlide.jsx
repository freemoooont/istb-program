import React from 'react'
import './mainslide.css'
import ReactECharts from 'echarts-for-react'
import _ from 'lodash'
import { COLORS_MAP } from '../../../consts'

function MainSlide({ languages, courseNumber, program }) {
  const [arr1, arr2] = program.map((obj) => obj.items)

  const categoryWithCount = _.countBy(_.concat(arr1, arr2), 'category')

  const categoriesName = _(categoryWithCount)
    .keys()
    .sortBy((x) => -categoryWithCount[x])
    .value()

  const data = categoriesName.map((name) => {
    return {
      itemStyle: { color: COLORS_MAP[name] },
      value: categoryWithCount[name],
      selected: name === 'Программная разработка',
      name,
    }
  })

  const option = {
    series: [
      {
        name: `${courseNumber} курс`,
        type: 'pie',
        radius: ['45%', '70%'],
        avoidLabelOverlap: false,
        label: {
          formatter: (params) => {
            return `${Math.floor(params.percent)}%`
          },
          // show: false,
          position: 'outside',
          overflow: 'breakAll',
        },
        labelLine: {
          showAbove: true,
          length: '6px',
          length2: '6px',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'normal',
          },
        },

        data,
      },
    ],
  }

  return (
    <>
      <div className="wrapper container container-common ">
        <div className="course--number">
          <h1>{courseNumber} курс</h1>
        </div>

        <div className="d-flex flex-column flex-md-row h-100">
          <div className="legend--style flex-grow-1 d-flex align-items-center">
            <div>
              {categoriesName.map((name, idx) => (
                <div key={idx} className="row align-items-center row--legend">
                  <div className="col-auto">
                    <div
                      style={{ background: COLORS_MAP[name] }}
                      className="item--legend"
                    />
                  </div>
                  <div className="col ps-0 text--legend">{name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart--style flex-grow-1">
            <div
              style={{ width: '100px' }}
              className="d-flex flex-wrap justify-content-center align-items-center language--style"
            >
              {languages.map((x) => (
                <span className="language-item" key={x}>
                  {x}
                </span>
              ))}
            </div>
            <div className="chart">
              <ReactECharts className="h-100" option={option} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSlide
