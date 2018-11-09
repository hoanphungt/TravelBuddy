import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import store from '../store'
import { connect } from 'react-redux'

class Register extends Component {

  fieldUserId = (userId) => {
    this.setState({id : userId.target.value})

  }  
  
  newUser = (theID) => {
    store.dispatch({
      type: 'NEW_USER',
      payload: {id:theID,  
        photo: '',
      firstName: '',
      lastName: '',
      age : 0,
      location: '',
      preferences: [],
      languages: [],
      stars: 0,
  
      feedback: ['No feedack'],
      bio: 'It is a long way to go',
      availability: true,
      peopleILiked: [2],
      matches: []
    }
    })
  }

  clicking = () => {
    this.newUser(this.state.id)
  }
  email = () => {}
  password = () => {}
  render (){
    return (
      <div className="container">
        <form className="registerForm">
        <label className="labelform">
        UserID:
          <input type="text" name="name" className="inputfield" id="userIDR" onChange={this.fieldUserId}/>
        </label>
        <label className="labelform">
        Email:
          <input type="text" name="name" className="inputfield" id="emailR" onChange={this.email}/>
        </label>
        <label className="labelform">
        Password:
          <input type="password" name="name" className="inputfield" id="passR" onChange={this.password}/>
        </label>
        <label className="labelform">
        Repeat password:
          <input type="password" name="name" className="inputfield" id="rpassR" onChange={this.password}/>
        </label>
        </form>

        <br/>

        <div className="row">
          <div className="col s2"></div>
          <div className="col s8 offset-s1">
            <NavLink to='/newuserinfo' className="white-text" >
              <button className="waves-effect waves-light btn-large orange darken-1" 
              onClick={this.clicking}><b>Sign Up</b></button>
            </NavLink>
          </div>
          <div className="col s1"></div>
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

export default connect(mapStateToProps)(Register);