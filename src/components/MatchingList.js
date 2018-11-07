import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchProfile from './MatchProfile'

class MatchingList extends Component {
    handleOnClick = () => {
        return <MatchProfile />
    }
    
    render() {
        return (
            <div className='matchingList'>
                <ul>
                    <li>
                        {this.props.matches.map(match => (
                            <div>
                                <image className='photo' href=''/>
                                <p>{match.firstName} {match.lastName}</p>
                                <p>{match.age}</p>
                                <p>{match.preferences}</p>
                                <button onClick={() => this.handleOnClick()}>Check</button>
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