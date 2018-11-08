import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MatchProfile extends Component {
  render() {
    const index = this.props.travelers.length - 1
    const match = this.props.travelers[index]
    const database = this.props.database
    return (
      <div>
        {this.props.travelers.length < 1 ? (
          <div className="container">
            <p className="center">You have no matches. Sorry...</p>
            <div className="center-align">
              <NavLink to='/newtravel' className="white-text">
                <button onClick={() => {
                  this.props.clearMatches()
                }
                } className="waves-effect waves-light btn-large">Try again!</button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="container">
            <h1 className="center">{match.firstName} {match.lastName}</h1>
            <div className="center-align">
              <button onClick={() => {
                this.props.deleteMatch(match.id)
              }
              } className="waves-effect waves-light btn-large">Dislike</button>
              <button onClick={() => this.props.addMatch(match.id, database)} className="waves-effect waves-light btn-large">Like</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}