import React from 'react'
import axios from 'axios'
import App from './App'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import 'normalize.css/normalize.css'
import '../styles/App.css'

class Photo extends React.Component {
  componentDidMount() {
    axios.get("/api/example").then(resp => {
      console.log(resp.data)
    })
  }

  render() {
    return (
      <div>
        <header id='picHeader'>
        <Link to='/SelectedAlbum'><span id='selectedAlbumArrow'><MaterialIcon icon="arrow_back" /></span></Link>
          <h1>Picture Name</h1>
        </header>
        <section>
          <div className="singlePicture">
            <div>
              <img src='https://place-hold.it/900x500' alt='pic'/>
            </div>
              <span className='changePhoto left'><MaterialIcon icon="chevron_left" /></span>
              <span className='changePhoto right'><MaterialIcon icon="chevron_right" /></span>
          </div>
        </section>
      </div>
    )
  }
}

export default Photo