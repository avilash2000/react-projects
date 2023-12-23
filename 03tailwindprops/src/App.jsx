import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  let myObj = {
    username:"Ramesh",
    age: 23
  }

  let newArr = [1,2,3,4,5,6];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind testing</h1>
      <Card username="Ramesh" btnText ="click me" />
      <Card username="Suresh" />
    </>
  )
}

export default App
