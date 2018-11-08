import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MatchPerson extends Component {

  render() {
    const id = this.props.match.params.id

    const srcString = this.props.travelers.filter(traveler => traveler.id == id)[0].photo

    return (
      <>
        {this.sourcePhoto}
        <h2>
          <strong>{this.props.travelers.filter(traveler => traveler.id == id)[0].firstName} {this.props.travelers.filter(traveler => traveler.id == id)[0].lastName}</strong>
          {srcString ? <img src={require(`${srcString}`)} alt='avatar' /> : <h1>No Avatar</h1>}
        </h2>
        <div>
          <strong>Age:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].age}
        </div>
        <div>
          <strong>Preferences:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].preferences}
        </div>
        <div>
          <strong>Feedback:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].feedback}
        </div>
        <div>
          <strong>Bio:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].bio}
        </div>
        <Link to='/matchinglist'>Go back to my matches!</Link>
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