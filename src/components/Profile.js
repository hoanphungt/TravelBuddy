import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
//import store from '../store'
import { connect } from 'react-redux'


class Profile extends Component {

  defineLocation = (dest) => {
    this.setState({
      location : dest.target.value
    })
  }
  defineArrivalDate = (dateStartInput) => {
    this.setState({
      ArrivalDate : dateStartInput.target.value
    })
  }
  defineDepartureDate = (dateEndInput) => {
    this.setState({
      departureDate : dateEndInput.target.value
    })
  }
  render (){
      return (
        <div className="container">
          <div className="registerForm">
          <div className="row">
            <div className="input-field col s7 offset-s3">
              <NavLink to='/newuserinfo' className="white-text">
              <button className="waves-effect waves-light btn-large orange darken-1">PROFILE</button>
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 offset-s2">
              <button className="waves-effect waves-light btn-large orange darken-1">PREFERENCES</button>
            </div>
          </div>           
        <div className="row">
          <div className="input-field col s6 offset-s2">
            <button className="waves-effect waves-light btn-large orange darken-1">NOTIFICATIONS</button>
          </div>
        </div>
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

export default connect(mapStateToProps)(Profile);
