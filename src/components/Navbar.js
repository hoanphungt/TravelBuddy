import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import store from '../store'

const Navbar = (props) => {
  const string = store.getState()[1].photo
  const id = store.getState()[1].id

  return (
    <nav>
      <div class="nav-wrapper teal accent-4">
        <div className='row'>
          <div className="col s2">
            {string ? <img className="circle" src={require(`${string}`)} alt='avatar' height="60px" width="60px"></img> : 
            <img className="circle" height="60px" width="60px" src={require(`./images/no_avatar.jpg`)} alt='avatar'></img>}
          </div>
          <div className="col s6">
            <span id='Logo'><b>Travel Buddy</b></span>
          </div>
          <div className="col s3">
              <a href="sass.html">
                <span className="centerSignOut">{id ? <NavLink to="/signout">Sign Out</NavLink>: console.log('')}</span>
              </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar) 