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
      <div>
        <form>
          <label>
            location :
            <input type="text" name="name"  onChange={this.defineLocation}  />
          </label>
        <div>
          <label>
            Arrival  :
            <input type="text" name="name" onChange={this.defineArrivalDate} />
          </label>
        </div>
        <div>
          <label>
            Departure  :
            <input type="text" name="name" onChange={this.defineDepartureDate}  />
          </label>
        </div>
        </form> 
        <div>
        </div>
        <Match location ={this.state.location} ></Match>
      </div>
    );
  }
}