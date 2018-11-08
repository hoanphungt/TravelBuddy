import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom'
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
          <form className="center">
            <div className="row">
              <div className="input-field col s6 offset-s3">
              <button className="waves-effect waves-light btn-large" > PROFILE</button>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 offset-s3">
              <button className="waves-effect waves-light btn-large" > PREFERENCES</button>
              </div>
            </div>           
            <div className="row">
              <div className="input-field col s6 offset-s3">
              <button className="waves-effect waves-light btn-large" > NOTIFICATIONS</button>

              </div>
            </div>
          </form>
          <div className='container'>
          </div>
        </div>    )
  }
}




const mapStateToProps = (state) => {
  return {
    travelers: state[0]
  }
}

export default connect(mapStateToProps)(Profile);
