import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a nuestra tienda de libros"/>
      <img className="imageLandPage"src="https://cmonmurcia.com/wp-content/uploads/2017/10/La-Casa-del-Libro.jpg" alt="Imagen Libros" />
    </div>
  )
}

export default App
