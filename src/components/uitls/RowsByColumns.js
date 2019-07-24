import React from "react"

import columnStyles from "../../styles/layout/columns.module.css"

const splitEvery = (array, length) =>
  array.reduce(
    (result, item, index) => {
      if ( index % length === 0 ) result.push([])
      result[Math.floor(index / length)].push(item)
      return result
    },
    []
  )

const classesForColumns = {
  2: columnStyles.isHalf,
  3: columnStyles.isThird,
}

const RowsByColumns = (props) => (
  <div style={ props.style }>
    { splitEvery(props.data, props.columns).map((row, rowIndex) => (
      <div key={ rowIndex } className={ columnStyles.row }>
        { row.map((col, colIndex) => (
          <div key={ colIndex } className={ classesForColumns[ props.columns ] }>
            { props.render(col) }
          </div>
        )) }
      </div>
    ))}
  </div>
)

export default RowsByColumns