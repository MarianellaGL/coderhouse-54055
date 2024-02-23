import { useState } from 'react'
import './App.css'
import { MiPrimerComponente } from './components/MiPrimerComponente'
import { MiSegundoComponente } from './components/MiSegundoComponente'
import Contador from './components/Contador'



function App() {
  //hooks
  //funciones handler



  //renderizado
  return (
    <>
      <MiPrimerComponente saludo="hola desde app" adios="chau a todis" />
      <MiSegundoComponente saludo="hola desde app" adios="chau desde componente2" tercera="hola desde tres" />
      <Contador />
    </>
  )
}

export default App
