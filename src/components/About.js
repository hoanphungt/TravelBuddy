import React from 'react'
import Rainbow from '../hoc/Rainbow'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p className="center">MPlplasd palsdm apslmd aplsdm palsmd plamsd alpsmd plamds plasmd plamsdp lmaspdlm asdpl mpl</p>
      <NavLink to="/newtravel">Travel</NavLink>
    </div>
  )
}

export default Rainbow(About)