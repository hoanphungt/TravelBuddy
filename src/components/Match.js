import React, { Component } from 'react';
import travelers from '../data/travelers'
import store from '../store'
import { NavLink } from 'react-router-dom'

export default class Match extends Component {
    
  matching = () => {
    const matchedTravelers = travelers.filter(traveler => traveler.location === this.props.location && traveler.availability === true)
    store.dispatch({
      type: 'MATCHING',
      payload: matchedTravelers
    })
  }
  
  render() {
    return (
      <div className="center-align">
        <NavLink to='/findmatch' className="white-text">
          <button className="waves-effect waves-light btn-large" onClick={() => this.matching()}>Find my Matches!</button>
        </NavLink>
      </div>
    )
  }
}