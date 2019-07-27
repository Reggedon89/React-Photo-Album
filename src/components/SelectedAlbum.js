import React from 'react'
import axios from 'axios'
import App from './App'
import Photo from './Photo'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import 'normalize.css/normalize.css'
import '../styles/App.css'

class SelectedAlbum extends React.Component {
  state = {
    albums: [],
    photos: [],
    albumName: ''

  }


  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/albums/${id}?_embed=photos`).then(resp => {
      this.setState({
       albumName:resp.data.name,
       photos: resp.data.photos
      })
    })
    axios.get("/api/albums").then(resp => {
      this.setState({
       albums: resp.data
      })
    })

  }
  componentWillReceiveProps(newprops){
    const id = newprops.match.params.id
    axios.get(`/api/albums/${id}?_embed=photos`).then(resp => {
      this.setState({
       albumName:resp.data.name,
       photos: resp.data.photos
      })
    })
  }

  render() {
    return (
      <div>
        <header id='selectedAlbumHeader'>
        <Link to='/'><span id='albumArrow'><MaterialIcon icon="arrow_back" /></span></Link>
          <h1>{this.state.albumName}</h1>
        </header>
        <main>
          <section>
            <aside>
              <ul>
              {this.state.albums.map(album => (
                <Link to={'/selectedalbum/' + album.id}><li>{album.name}</li></Link>
              ))}
              </ul>
            </aside>
          </section>
          <section className='rows'>
            {this.state.photos.map(photo => ( 
            <Link to='/photo'>
              <div className="picture">
                <div>
                  <img src={photo.photo} alt='pic' />
                </div>
                <div>
                  <p>{photo.name}</p>
                </div>
              </div>
            </Link>
            ))}
          </section>
        </main>
      </div>
    )
  }
}

export default SelectedAlbum