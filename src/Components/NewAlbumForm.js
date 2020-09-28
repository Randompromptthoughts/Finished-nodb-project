import React, { Component } from 'react';

class NewAlbumForm extends Component {
    constructor(props) {
        super(props);

        this.state = {albumName: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({albumName: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.state.albumName);
    }

    

    render() {

        return (
         <form onSubmit={this.handleSubmit} >
           <label>
             New Album:
             <input type='text' value={this.state.albumName} onChange={this.handleChange} name='name'></input>
           </label>
           <input type='submit' value='Add'></input>
           <h3>{this.state.albumName}</h3>
         </form>
        );
    }
}
export default NewAlbumForm;