import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import store from '../store'
import { connect } from 'react-redux'

class LogIn extends Component {

state = {results : []}

  fieldUserId = (userId) => {
    this.setState({id : userId.target.value})

  }

 selectCorrectUser =() => {
  const result = this.props.travelers.filter( a => a.id == this.state.id)
this.setState ({  results : result})  

if (result.length<1) { alert('invalid username') }
this.signingIn(this.state.id)
}

signingIn = (theID) => {
  store.dispatch({
    type: 'SIGN_IN',
    payload: this.props.travelers[theID-1]
  })
}
  
  /*handleClick =(event) => {
    if (this.state.results < 1) { 
      event.preventDefault()}
      console.log(this.state.results)

  }*/
  render () {
    return (
      <div>
      <form>
      <label>
        UserID or Email :
        <input type="text" name="name"  onChange={this.fieldUserId}  />
      </label>
      <label>
        Password  :
        <input type="text" name="name" onChange={this.password} />
      </label>

      </form>

      <NavLink to='/newTravel' className="white-text" >{/*onClick={this.handleClick}*/}

      <button className="waves-effect waves-light btn-large"  onClick={this.selectCorrectUser}  >Sign In!</button>
      </NavLink>
 
      {console.log(this.state.results)}
      {console.log(this.state.id)}


      <div>

       <NavLink to='/register' className="white-text" >
      <button className="waves-effect waves-light btn-large"  >No account ? Register</button>
      </NavLink>
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

export default connect(mapStateToProps)(LogIn);

