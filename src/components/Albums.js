import React from 'react'
import axios from 'axios'
import App from './App'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import '../styles/App.css'

class Albums extends React.Component {
  state = {
    albums: []

  }


  componentDidMount() {
    axios.get("/api/albums").then(resp => {
      this.setState({
       albums: resp.data
      })
    })
  }

  render() {
    return (
      <div id='container'>
        <header id='albumHeader'>
          <h1>My Future Vacation Albums</h1>
        </header>
        <section className='rows'>
          {this.state.albums.map(album => (
            <Link key={'album-link-' + album.id} to={'/selectedalbum/' + album.id}>
              <div className="album">
                <div>
                  <img src={album.coverPhoto} alt='pic' />
                </div>
                <div>
                  <p>{album.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    )
  }
}

export default Albums