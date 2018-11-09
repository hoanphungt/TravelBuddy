import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MatchingList extends Component {
    render() {
        const array = []
        this.props.matches.forEach(id => array.push(this.props.travelers.filter(traveler => traveler.id == id)[0]))

        return (
            <div>
                <div class="container" style={{ overflowY: 'scroll', height: '550px' }}>
                    <ul>
                        <li>
                            {array.map(match => (
                                <>
                                    <div>
                                        <Link to={`/matches/${match.id}`} id={match.id}><strong>{match.firstName} {match.lastName}</strong></Link>
                                    </div>
                                    <div class='row'>
                                        <div class='column' style={{ float: 'left', width: '50%', height: '80px' }}>
                                            <p>{match.photo ? <img className="circle" height="80px" width="60px" src={require(`${match.photo}`)} alt='avatar' /> : <img className="circle" height="80px" width="60px" src={require(`./images/no_avatar.jpg`)} />}</p>
                                        </div>
                                        <div class='column' style={{ float: 'right', width: '50%', height: '80px' }}>
                                            <p>{match.age}</p>
                                            <p>{match.preferences.join(', ')}</p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </li>
                    </ul>
                </div>
                <div class='container'><Link to='/findmatch' >Go back</Link></div>
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