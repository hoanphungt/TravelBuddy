import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MatchPerson extends Component {

  render() {
    const id = this.props.match.params.id

    const srcString = this.props.travelers.filter(traveler => traveler.id == id)[0].photo

    return (

      <div class='container' style={{overflowY: 'scroll', height: '550px'}}>        
        <div>
          <strong style={{fontSize: '30px', color: '#276e98'}}>{this.props.travelers.filter(traveler => traveler.id == id)[0].firstName} {this.props.travelers.filter(traveler => traveler.id == id)[0].lastName}</strong>
          {srcString ? <img className="rectangular" height="200px" src={require(`${srcString}`)} alt='avatar' /> : <img className="rectangular" height="200px" src={require(`./images/no_avatar.jpg`)} />}
        </div>
        <div>
          <strong style={{color: '#276e98'}}>Age:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].age}
        </div>
        <br></br>
        <div>
          <strong style={{color: '#276e98'}}>Preferences:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].preferences.join(', ')}
        </div>
        <br></br>
        <div style={{textAlign: 'justify'}}>
          <strong style={{color: '#276e98'}}>Feedback:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].feedback}
        </div>
        <br></br>
        <div style={{textAlign: 'justify'}}>
          <strong style={{color: '#276e98'}}>Bio:</strong> {this.props.travelers.filter(traveler => traveler.id == id)[0].bio}
        </div>
        <br></br>
        <div>
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