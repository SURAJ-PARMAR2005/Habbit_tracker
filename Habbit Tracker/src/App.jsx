import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Stats from './Pages/Stats';
const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/stats" element={<Stats />} />
    <Route path="/analytics" element={<Analytics />} />

  </Routes>
  )
}

export default App
