import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchProfile from './MatchProfile'
import { NavLink } from 'react-router-dom'

class MatchingProcess extends Component {
  state = {
    m: [...this.props.travelers]
  }
  
  renderPossibleMatch(match) {
    return (
      <MatchProfile
      key = {match.id}
      firstName = {match.firstName}
      lastName = {match.lastName}
      preferences = {match.preferences}
      languages = {match.languages}
      photo = {match.photo}
      />
    )
  }

  render() {
    // const index = Math.floor(Math.random() * this.state.m.length)
    const index = this.state.m.length - 1
    return (
      <div>
        <div>
          {this.state.m.length < 1 ? <p className="center">You have no matches. Sorry...</p> : (
            this.renderPossibleMatch(this.state.m[index])
          )}
        </div>
        <div>
          {this.state.m.length < 1 ? (
            <div className="center-align">
              <NavLink to='/newtravel' className="white-text">
                <button className="waves-effect waves-light btn-large">Try again!</button>
              </NavLink>
            </div>
            ) : (
            <div className="center-align">
              <button onClick={this.handleDislike} className="waves-effect waves-light btn-large">Dislike</button>
              <button onClick={this.handleLike} className="waves-effect waves-light btn-large">Like</button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    travelers: state
  }
}

export default connect(mapStateToProps)(MatchingProcess);