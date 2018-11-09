import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MatchingList extends Component {    
    
    
    render() {         
        const array = []
        this.props.matches.forEach(id => array.push(this.props.travelers.filter(traveler => traveler.id == id)[0]))

        return (
            <div class="container" style={{overflowY: 'scroll', height: '550px'}}>
                <ul>
                    <li>
                        {array.map(match => (
                            <div >
                                <div style={{flexFlow: 1}}>
                                    <Link to={`/matches/${match.id}`} id={match.id}><strong>{match.firstName} {match.lastName}</strong></Link> 
                                    <p>{match.age}</p>
                                    <p>{match.preferences}</p>
                                </div>    
                                <div style={{flexFlow: 2}}>
                                    <p>{match.photo ? <img className="circle" height="60px" width="80px" src={require(`${match.photo}`)} alt='avatar' /> : <img className="circle" height="60px" width="80px" src={require(`./images/no_avatar.jpg`)} />}</p> 
                                </div>                                                  
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