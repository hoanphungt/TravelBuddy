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
          <div class="card">
            <div class="card-image">
              <img src={require(`./images/no_avatar.jpg`)} alt="profile img"/>
              <span class="card-title"><b>{match.firstName}, {match.age}</b></span>
              <div class="card-content">
                <p>{match.preferences.join(', ')}</p>
              </div>
            </div>

            
            <div className="row">
              <div className="col s2 offset-s1">
                <a class="btn-floating btn-large waves-effect waves-light red"
                  onClick={() => {this.props.deleteMatch(match.id)}}>
                  <i class="material-icons">clear</i>
                </a>
              </div>
            <div class="col s2 offset-s3">
              <a class="btn-floating btn-large waves-effect waves-light red"
                onClick={() => this.props.addMatch(match.id, database)}>
                <i class="material-icons">check</i>
              </a>
            </div>
          </div>
        </div>
        )}
      </div>
    )
  }
}