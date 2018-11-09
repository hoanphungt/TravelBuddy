import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MatchPerson extends Component {

  render() {
    const id = this.props.match.params.id

    const srcString = this.props.travelers.filter(traveler => traveler.id == id)[0].photo

    return (
      <div >        
        <div  class='container' >
          <strong style={{fontSize: '30px'}}>{this.props.travelers.filter(traveler => traveler.id == id)[0].firstName} {this.props.travelers.filter(traveler => traveler.id == id)[0].lastName}</strong>
          {srcString ? <img className="rectangular" height="200px" src={require(`${srcString}`)} alt='avatar' /> : <img className="rectangular" height="200px" src={require(`./images/no_avatar.jpg`)} />}
        </div>
        <div class='container'>
          <strong>Age:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].age}
        </div>
        <div class='container'>
          <strong>Preferences:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].preferences}
        </div>
        <div class='container'>
          <strong>Feedback:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].feedback}
        </div>
        <div class='container'>
          <strong>Bio:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].bio}
        </div>
        <div class='container'>
          <Link to='/matchinglist'>Go back to my matches!</Link>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    travelers: state[0]
  }
}

export default connect(mapStateToProps)(MatchPerson)