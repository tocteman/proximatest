import './App.css'
import Menu from './components/Menu.jsx'
import Welcome from './components/Welcome.jsx'
import Features from './components/Features.jsx'

function App() {

  return (
    <div className="page">
      <Menu/>
      <Welcome/>
      <Features/>
    </div>
  )
}

export default App
