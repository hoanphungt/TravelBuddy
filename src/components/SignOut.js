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
      <div>
      <h1> Are you sure ? </h1>
      <NavLink to='/' className="white-text" >{/*onClick={this.handleClick}*/}

      <button className="waves-effect waves-light btn-large"  onClick={this.signinOut}  > YES</button>
      </NavLink>
 


       <NavLink to='/home' className="white-text" >
      <button className="waves-effect waves-light btn-large"  >NO </button>
      </NavLink>

    </div>


    )
   
  }
}


export default SignOut;

