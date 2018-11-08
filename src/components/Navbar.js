import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import store from '../store'

const Navbar = (props) => {


  const string = store.getState()[1].photo
  const signedUp = store.getState()[1]
  const userName = store.getState()[1].firstName
  const id = store.getState()[1].id

  //
  console.log('signedUp')
  console.log(userName)


  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">

        {string ? <img src={require(`${string}`)} alt='avatar' height="70px" length="70px">
        </img> : <img height="70px" length="70px" src={require(`./images/no_avatar.jpg`)}
          alt='avatar'></img>}

        <a className="brand-logo">Travel Buddy</a>

        <ul className="right">

          <li>{ id  ? <h4>{userName}</h4> :
            <NavLink to="/">Sign In</NavLink>}</li>

          {id  ?   <li><NavLink to="/signout">Sign Out</NavLink></li> : console.log('') }  

        </ul>

        {id  ? <NavLink to="/profile"><img
          src={require(`./images/setting.jpeg`)} alt='avatar' height="70px" length="70px">
        </img></NavLink> :
         console.log('')}

      </div>
    </nav>
  )
}


export default withRouter(Navbar) 