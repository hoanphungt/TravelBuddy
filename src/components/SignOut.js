import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import store from '../store'

class SignOut extends Component {

state = {results : []}

signinOut = () => {
  store.dispatch({
    type: 'SIGN_OUT',
    payload: {}
  })
}

  render () {
    return (
    <div className="container">
      <div className="signout">
      <h4 align="center">Are you sure?</h4>
      <br></br>
      <div className='row'>
        <div className="col s4 offset-s1">
          <NavLink to='/' className="white-text" >{/*onClick={this.handleClick}*/}
            <button className="waves-effect waves-light btn-large orange darken-1"
              onClick={this.signinOut}>YES
            </button>
          </NavLink>
        </div>
        <div className="col s4 offset-s1">
          <NavLink to='/newTravel' className="white-text">
            <button className="waves-effect waves-light btn-large orange darken-1">NO</button>
          </NavLink>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default SignOut;