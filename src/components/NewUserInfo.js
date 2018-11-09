import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class NewUserInfo extends Component {
  state = this.props.currentUser







  firstname = (input) => {
    this.setState({
      firstName : input.target.value
    })
  }
  lastname = (input) => {
    this.setState({
      lastName : input.target.value
    })
  }
  age = (input) => {
    this.setState({
      age : input.target.value
    })
  }
  location = (input) => {
    this.setState({
      location : input.target.value
    })
  }

  userInfo = () => {
    this.props.dispatch({
      type: 'NEW_USER_INFO',
      payload: this.state
    })
  }



render(){
  return (
    <div className="container">
    <form className="center">
      <h4>Personal data</h4>
      <div className="row">
        <div className="input-field col s6 offset-s3">
          <input id="destination2" placeholder="first name" type="text" onChange={this.firstname}/>
          <label for="destination2"></label>
        </div>
        <div className="input-field col s6 offset-s3">
          <input id="destination2" placeholder="last name" type="text" onChange={this.lastname}/>
          <label for="destination2"></label>
        </div>
        <div className="input-field col s6 offset-s3">
          <input id="destination2" placeholder="age" type="text" onChange={this.age}/>
          <label for="destination2"></label>
        </div>
        <div className="input-field col s6 offset-s3">
          <input id="destination2" placeholder="location" type="text" onChange={this.location}/>
          <label for="destination2"></label>
        </div>

         <NavLink to='/newTravel' className="white-text" >
      <button className="waves-effect waves-light btn-large"  onClick={this.userInfo} >Next</button>
      </NavLink>
      </div>
    

    </form>
  
  </div>
  )
}
}






const mapStateToProps = (state) => {
  return {
    travelers : state[0],
    currentUser: state[1]
  }
}

export default connect(mapStateToProps)(NewUserInfo)