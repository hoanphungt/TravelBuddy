import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MatchingList extends Component {    
    render() {        
        return (
            <div className='matchingList'>
                <ul>
                    <li>
                        {this.props.matches.map(match => (
                            <div>
                                <image className='photo' href=''/>
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
        matches: state[1].matches
    }
}

export default connect(mapStateToProps)(MatchingList);