import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import Welcome from './components/Welcome.jsx'
import Features from './components/Features.jsx'

function App() {

  const handleScroll = e => {
    console.log("algo")
    console.log(e.currentTarget.scrollTop)
    console.log(e.currentTarget.offsetHeight)
  }


  return (
    <div className="page">
      <Menu/>
      <Welcome/>
      <Features/>
    </div>
  )
}

export default App
