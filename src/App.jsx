import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import Habilidades from './pages/Habilidades'
import Contacto from './pages/Contacto'
import Test from './pages/Testeo'

function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/SobreMi" element={<SobreMi />} />
				<Route path="/Proyectos" element={<Proyectos />} />
				<Route path="/Habilidades" element={<Habilidades />} />
				<Route path="/Contacto" element={<Contacto />} />
				<Route path="/Test" element={<Test />} />
			</Routes>
		</BrowserRouter>
  	)
}

export default App