import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FavDisplays from './Components/FavDisplays';
import './App.css';
import AlbumList from './Components/AlbumList'

function App() {
  return (
    <div className="App">
        <Header/>
        <FavDisplays />
        <Footer/>
    </div>
  );
}

export default App;
