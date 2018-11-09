import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchProfile from './MatchProfile'
import store from '../store'
import { NavLink } from 'react-router-dom'

class MatchingProcess extends Component {
  state = {
    database: this.props.travelers[0],
    currentUser: this.props.travelers[1],
    matches: this.props.travelers[2]
  }

  deleteMatch = (id) => {
    let matches = this.state.matches.filter(match => {
      return match.id !== id
    });
    this.setState({
      matches: matches
    });
  }

  addMatch = (id, database) => {
    // This is the id of the match and not the current User
    // console.log(id)
    // console.log(this.state.currentUser.peopleILiked)
    store.dispatch({
      type: 'ADD_POSSIBLE_MATCH',
      payload: {
        id,
        database
      }
    })
    this.deleteMatch(id)
  }

  clearMatches = () => {
    store.dispatch({
      type: 'CLEAR_ALL_MATCHES',
      payload: null
    })
  }
  
  render() {
    return (
      <div className="container">
        <MatchProfile travelers={this.state.matches} database ={this.state.database} 
        deleteMatch={this.deleteMatch} addMatch={this.addMatch} clearMatches={this.clearMatches}/>
        <div className="center-align">
          <p>
            <NavLink to='/matchinglist' className="white-text">
              <a class="btn-floating btn-large waves-effect waves-light orange darken-3">
                <i class="material-icons">people</i>
              </a>
            </NavLink>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    travelers: state
  }
}

export default connect(mapStateToProps)(MatchingProcess);


