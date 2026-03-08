import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Dashboard />} />
    </Routes>
  )
}

export default App
