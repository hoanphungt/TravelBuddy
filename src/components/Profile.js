import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom'
//import store from '../store'
import { connect } from 'react-redux'


class Profile extends Component {


  render (){
    return (
      <h1> PROFILE </h1>
    )
  }
}




const mapStateToProps = (state) => {
  return {
    travelers: state[0]
  }
}

export default connect(mapStateToProps)(Profile);
