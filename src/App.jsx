import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Yo from './pages/Yo'
import Nav from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Yo" element={<Yo />} />
        <Route path="/" element={<Nav />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App