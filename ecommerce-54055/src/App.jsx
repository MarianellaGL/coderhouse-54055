import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const combObj = { nombre: "Juan", apellido: "Manuel" }
  const numbers = [1, 2, 3, 4, 5]
  const animales = ['perro', 'zorro']

  const filteredNumbers = numbers.filter((num) => num % 2 === 0)

  console.log(filteredNumbers)

  const animalesMap = animales.map((name, index) => (
    <li key={index}>{name}</li>
  ))

  const sum = numbers.reduce((acc, num) => acc + num, 0)

  const busqueda = numbers.some((num) => num % 2 === 0)

  const [first, second, third] = numbers;
  const { nombre, apellido } = combObj;


  return (
    <>
      {animalesMap}
      {first}, {second}, {third}
      {nombre}, {apellido}
    </>
  )
}

export default App
