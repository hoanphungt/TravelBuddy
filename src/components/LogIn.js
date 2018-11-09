import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class LogIn extends Component {

state = {results : []}

  fieldUserId = (userId) => {
    this.setState({id : userId.target.value})

  }

 selectCorrectUser =(event) => {
  const result = this.props.travelers.filter( a => a.id == this.state.id)
this.setState ({  results : result})  
if (result[0]===undefined) {
  alert('invalid username')
  event.preventDefault()
}
else {this.signingIn(result[0])}
}

/*signingIn = (theID) => {
  store.dispatch({
    type: 'SIGN_IN',
    payload: this.props.travelers[theID-1]
  })
}*/

signingIn = (theID) => {
  this.props.dispatch({
    type: 'SIGN_IN',
    payload: theID
  })
}
  
  
  render () {
    return (
    <div className="container">
      <div className="container">
      <form className="loginform">
      <label>
        UserID or Email :
        <input id="userID" type="text" name="name" className="inputfield" onChange={this.fieldUserId}  />
      </label>
      <label>
        Password  :
        <input id="password" type="password" name="name" className="inputfield" onChange={this.password} />
      </label>
      </form>
      </div>

      <br></br>
      <br></br>

      <div className="row">
        <div className="col s4">
        </div>
        <div className="col s4">
          <NavLink to='/newTravel' className="white-text" onClick={this.selectCorrectUser} >
            <button className="waves-effect waves-light btn-large orange darken-1">
              <b>Sign In</b>
            </button>
          </NavLink>
        </div>
        <div className="col s4">
        </div>
      </div>

    </div>

      /* <div className="centerButtonLogIn">
      </div>

      <div className="row">
          <NavLink to='/register' className="white-text" >
            <button className="waves-effect waves-light btn-large orange darken-1">Sign up</button>
          </NavLink>
      </div> */
    )
   
  }
}


const mapStateToProps = (state) => {
  return {
    travelers: state[0]
  }
}

export default connect(mapStateToProps)(LogIn);

