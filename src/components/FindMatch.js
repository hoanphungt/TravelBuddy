import React, { Component } from 'react'
import MatchingProcess from './MatchingProcess';

class FindMatch extends Component {
  render() {
    return (
      <div>
        <h4 className="center">Check your possible matches!</h4>
        <MatchingProcess />
      </div>
    )
  }
}

export default FindMatch