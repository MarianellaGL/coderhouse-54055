import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemList from './components/itemList'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola!" />
      <ItemList />

    </>
  )
}

export default App
