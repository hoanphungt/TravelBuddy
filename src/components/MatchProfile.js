import React, { Component } from 'react'

export default class MatchProfile extends Component {
  render() {
    return (
      <div>
        <h1 className="center">{this.props.firstName} {this.props.lastName}</h1>
      </div>
    )
  }
}