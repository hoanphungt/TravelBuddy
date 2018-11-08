import React, { Component } from 'react';
import Match from './Match'

export default class NewTravel extends Component {

  state ={
    location : '',
    ArrivalDate : '',
    departureDate : '',
  }

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

  printState = () => {console.log(this.state)}

  render() {
    return (
      <div className="container">
        <form className="center">
          <h4>I'm going to</h4>
          <div className="row">
            <div className="input-field col s6 offset-s3">
              <input id="destination" placeholder="Try Berlin..." type="text" onChange={this.defineLocation}/>
              <label for="destination"></label>
            </div>
          </div>
          <h4>On the following period</h4>
          <div className="row">
            <div className="input-field col s2 offset-s3">
              <input id="startDate" type="text" onChange={this.defineArrivalDate}/>
              <label for="startDate"></label>
            </div>
            <div className='col s2'>
              <h4 className="center">to</h4>
            </div>
            <div className="input-field col s2">
              <input id="lastDate" type="text" onChange={this.defineDepartureDate}/>
              <label for="lastDate"></label>
            </div>
          </div>
        </form>
        <div className='container'>
          <Match location ={this.state.location} ></Match>
        </div>
      </div>
    );
  }
}