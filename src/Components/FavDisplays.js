import React, { Component } from 'react';
import axios from 'axios';  
import AlbumList from './AlbumList.js';
import NewAlbumForm from './NewAlbumForm.js';

class FavDisplays extends Component {
    constructor() {
      super();

      this.loadAlbums = this.loadAlbums.bind(this);
      this.deleteAlbum = this.deleteAlbum.bind(this);
      this.createAlbum = this.createAlbum.bind(this);
      this.editAlbum = this.editAlbum.bind(this);

      this.state = {
          loadingAlbums: true,
          albums: null
      }
    }

    componentDidMount() {
        this.loadAlbums();
    }

    loadAlbums() {
      axios.get('/api/favorites')
      .then(res => {
        this.setState({loadingAlbums: false, albums: res.data})
      })
      .catch(err => console.log(err))
    }

    deleteAlbum(albumId) {
      axios.delete(`/api/favorite/${albumId}`) 
      .then(res => {
        this.loadAlbums();
      })
      .catch(err => console.log(err))
    }

    createAlbum(albumName) {
      axios.post(`/api/favorites`, {name: albumName})
      .then(res =>  {
        this.loadAlbums();
      }) 
      .catch(err => alert(err.response.data))
    }

    editAlbum(id, newName) {
      let update = {name: newName};

      axios.put(`/api/favorite/${id}`, update)
        .then(res => {
          this.loadAlbums();
        })
        .catch(err => console.log(err))
    }
    
    render () {
        const {loadingAlbums, albums} = this.state;
        return (
          <section>
            {loadingAlbums ? <h1>Loading...</h1> : <AlbumList albums={albums} onDelete={this.deleteAlbum} onEdit={this.editAlbum}></AlbumList>}
            <NewAlbumForm onAdd={this.createAlbum}/>
          </section>
        )
    }
}

export default FavDisplays;