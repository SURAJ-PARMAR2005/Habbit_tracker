import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Stats from './Pages/Stats';
const App = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden '>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/stats" element={<Stats />} />
    <Route path="/analytics" element={<Analytics />} />
  </Routes>
    </div>
  )
}

export default App
