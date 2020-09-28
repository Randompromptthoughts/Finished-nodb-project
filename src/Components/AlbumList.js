import React, {Component} from 'react'

class AlbumList extends Component {

  constructor(props) {
      super(props);

      this.state = {
        currentlyEditing: 0,
        currentAlbumName: '',
      }

      this.handleChange = this.handleChange.bind(this);
      this.saveChange = this.saveChange.bind(this);
  }

  setEditable(album) {
    this.setState({
      currentlyEditing: album.id,
      currentAlbumName: album.name
    })
  }

  handleChange(event) {
    let newVal = event.target.value;
    this.setState(prevState => {
      prevState.currentAlbumName = newVal;
      return prevState;
    })
  }

  saveChange() {
    this.props.onEdit(this.state.currentlyEditing, this.state.currentAlbumName)
    this.setState({
      currentlyEditing: 0,
      currentAlbumName: '',
    })
  }

  render() {
    return <ul>
      <h2>My Top 10 Albums:</h2>
        {this.props.albums.map((album, index) => {
          if (album.id == this.state.currentlyEditing) {
              return <li>
              <input value={this.state.currentAlbumName} onChange={this.handleChange}></input>
              <button onClick={this.saveChange}>Save</button>
              </li>
          } else {
            return <li key={index}>
              <span>{album.name}</span>
                <button onClick={() => {this.props.onDelete(album.id)}}>Delete</button>
                <button onClick={() => {this.setEditable(album)}}>Edit</button>
              </li>
          }
        })}
    </ul>
  }
}

export default AlbumList;