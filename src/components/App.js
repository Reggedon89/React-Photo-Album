import React from 'react'
import axios from 'axios'
import Albums from './Albums'
import Photo from './Photo'
import SelectedAlbum from './SelectedAlbum'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import '../styles/App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={Albums}/>
          <Route path='/selectedalbum/:id' component={SelectedAlbum} />
          <Route path='/photo' component={Photo} />
        </Router>
      </div>
    )
  }
}

export default App