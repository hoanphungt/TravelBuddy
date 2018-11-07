import React, { Component } from 'react'
import { connect } from 'react-redux'

class MatchPerson extends Component {

  render() {
    const id = this.props.match.params.id
    
    return (
      <>
        <div>
          <strong>{this.props.travelers.filter(traveler => traveler.id == id)[0].firstName} {this.props.travelers.filter(traveler => traveler.id == id)[0].lastName}</strong>

        </div>
        <div>
          <strong>Preferences:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].preferences}

        </div>
        <div>
          <strong>Feedback:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].feedback}

        </div>
        
          
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    travelers: state[0]
  }
}

export default connect(mapStateToProps)(MatchPerson)