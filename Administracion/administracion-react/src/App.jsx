import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Alumno from './components/Alumno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Alumno />
    </div>
  )
}

export default App
