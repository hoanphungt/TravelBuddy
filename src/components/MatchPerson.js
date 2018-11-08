import React, { Component } from 'react'
import { connect } from 'react-redux'

class MatchPerson extends Component {

  render() {
    const id = this.props.match.params.id

    const srcString = this.props.travelers.filter(traveler => traveler.id == id)[0].photo
    console.log(srcString)
    return (
      <>
      {this.sourcePhoto}
        <div>
          <strong>{this.props.travelers.filter(traveler => traveler.id == id)[0].firstName} {this.props.travelers.filter(traveler => traveler.id == id)[0].lastName}</strong>

        </div>
        <div>
          <strong>Preferences:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].preferences}

        </div>
        <div>
          <strong>Feedback:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].feedback}

          {srcString ?           <img src={require(`${srcString}`)}alt ='avatar'/>
: <h1>No Avatar</h1>}


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