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
        <input type="text" name="name" className="inputfield" onChange={this.fieldUserId}  />
      </label>
      <label>
        Password  :
        <input type="text" name="name" className="inputfield" onChange={this.password} />
      </label>
      </form>
      </div>
      <NavLink to='/newTravel' className="white-text" onClick={this.selectCorrectUser} >
      <button className="waves-effect waves-light btn-large"  
       >Sign In!</button>
      </NavLink>
 


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

