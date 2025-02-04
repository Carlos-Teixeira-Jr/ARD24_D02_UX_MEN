import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CreatePlant } from './pages/create-plant'

function App() {
  return (
    <>
      <Routes>
        <Route path="/create-plant" element={<CreatePlant />} />
      </Routes>
    </>
  )
}

export default App
