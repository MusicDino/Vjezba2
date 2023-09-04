import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Izmjena</h1>
        <h2>Heads or tales: {coinFlipperJS()}</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Random</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Uredi <code>src/App.jsx</code> i saveaj 
        </p>
      </div>
      <p className="read-the-docs">
        Nemoj kliknuti nego slušaj Mateja
      </p>
    </>
  )
}

export default App
