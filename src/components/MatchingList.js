import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MatchingList extends Component {    
    
    
    render() {         
        const array = []
        this.props.matches.forEach(id => array.push(this.props.travelers.filter(traveler => traveler.id == id)[0]))

        return (
            <div className='matchingList'>
                <ul>
                    <li>
                        {array.map(match => (
                            <div>
                                <Link to={`/matches/${match.id}`} id={match.id}>{match.firstName} {match.lastName}</Link>
                                <p>{match.preferences}</p>
                            </div>
                        ))}
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        travelers: state[0],
        matches: state[1].matches
    }
}

export default connect(mapStateToProps)(MatchingList);