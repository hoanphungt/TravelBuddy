import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import store from '../store'

const Navbar = (props) => {
  const string = store.getState()[1].photo
  const id = store.getState()[1].id

  return (

  // <nav>
  //   <div class="nav-wrapper teal accent-4">
  //   <a>{string ? (
  //       <div>
  //         <img className="circle" src={require(`${string}`)} alt='avatar' height="60px" width="60px"></img>
  //       </div>
  //     ) : (
  //       <img className="circle" height="60px" width="60px" src={require(`./images/no_avatar.jpg`)} alt='avatar'></img>
  //     )}
  //   </a>
  //   <a class="brand-logo">Travel Buddy</a>
  //   {id ? (
  //   <ul class="right">
  //   <li><a><NavLink to="/signout"><i class="material-icons">person_outline</i></NavLink></a></li>
  //   ) : (

  //   )}
  //   <li><a><NavLink to="/profile"><i class="material-icons">more_vert</i></NavLink></a></li>
  //   </ul>
  //   </div>
  // </nav>





    <nav>
      <div class="nav-wrapper teal accent-4">
        <div className='row'>
          <div className="col s2">
            {string ? (
              <div>
                <img className="circle" src={require(`${string}`)} alt='avatar' height="60px" width="60px"></img>
              </div>
            ) : (
              <img className="circle" height="60px" width="60px" src={require(`./images/no_avatar.jpg`)} alt='avatar'></img>
            )}

          </div>
          <div className="col s5">
            <span id='Logo'><b>Travel Buddy</b></span>
          </div>
          <div className="col s1">
          <a>{id ? (
            <NavLink to="/signout"><i class="material-icons">person_outline</i></NavLink>
          ) : (
            console.log('')
          )}
          </a>
          </div>
          <div className="col s1">
          <a>{id ? (
            <NavLink to="/profile"><i class="material-icons">more_vert</i></NavLink>
            ) : (
            console.log('')
          )}
          </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar) 