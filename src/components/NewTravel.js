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
      <div className="newtraveler">
        <form className="center">
          <div className="newtravelerinputs">
          <h5><b>I'm going to</b></h5>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input id="destination" placeholder="Try Berlin..." type="text" onChange={this.defineLocation}/>
              <label for="destination"></label>
            </div>
          </div>
          <h5><b>On the following period</b></h5>
          <div className="row">
            <div className="input-field col s3 offset-s2">
              <input type="text" id="startDate" placeholder="Date" onChange={this.defineArrivalDate}/>
              <label for="startDate"></label>
            </div>
            <div className='col s1'>
              <h5 className="centerh5"><b>to</b></h5>
            </div>
            <div className="input-field col s3 offset-s1">
              <input type="text" id="lastDate" placeholder="Date" onChange={this.defineDepartureDate}/>
              <label for="lastDate"></label>
            </div>
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