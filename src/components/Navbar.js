import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import store from '../store'

const Navbar = (props) => {

  const string = store.getState()[1].photo
  const signedUp = store.getState()[1]
  const  userName = store.getState()[1].firstName

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
      {string ? <img  src={require(`${string}`)} alt='avatar'/> : <img  src={require(`./images/happy2.svg`)} alt='avatar'/>}
        <a className="brand-logo">Travel Buddy</a>
        <ul className="right">
        <li>{signedUp ? <h4>{userName}</h4>  : <h4> Sign Up </h4>}</li>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}



export default  withRouter(Navbar) 