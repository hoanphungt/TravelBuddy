import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NewTravel from './components/NewTravel'
import FindMatch from './components/FindMatch'
import MatchingList from './components/MatchingList';
import MatchPerson from './components/MatchPerson';
import LogIn from './components/LogIn'
import Register from './components/Register'
import Profile from './components/Profile'
import SignOut from './components/SignOut'
import NewUserInfo from './components/NewUserInfo'
import './App.css'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">

          <div className="container">
            <div className="container" id="mainapp">
            <Navbar />
            <Route exact path='/' component={LogIn} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/newtravel' component={NewTravel} />          
            <Route path='/findmatch' component={FindMatch} />
            <Route path='/matchinglist' component={MatchingList}/>
            <Route exact path="/matches/:id" component={MatchPerson} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/signout' component={SignOut} />
            <Route exact path='/newuserinfo' component={NewUserInfo} />

            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
