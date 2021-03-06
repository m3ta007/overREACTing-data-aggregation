import React from 'react'
import PropTypes from 'prop-types'
// import withData from './withData'
// import withUpdatedList from './withUpdatedList'

function YearTable(props) {
  return (
    <div>
      <table>
        <caption>
          <h2>Year Table</h2>
        </caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item, i) => (
            <tr key={i}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

YearTable.propTypes = {
  props: PropTypes.objectOf({
    list: PropTypes.arrayOf({
      item: PropTypes.shape({
        year: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    }).isRequired,
  }),
}

export default YearTable
