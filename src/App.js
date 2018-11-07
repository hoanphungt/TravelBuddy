import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NewTravel from './components/NewTravel'
import FindMatch from './components/FindMatch'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/newtravel' component={NewTravel} />          
          <Route path='/findmatch' component={FindMatch} />          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
