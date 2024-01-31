import { useState } from 'react'

import './App.css'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Todos />
      <Footer></Footer>
    </>
   
  )
}

export default App
