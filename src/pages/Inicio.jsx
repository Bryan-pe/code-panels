import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SobreMi from "../components/SobreMi"
import Proyectos from "../components/Proyectos"
import Habilidades from "../components/Habilidades"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"

function Inicio() {
    return (
        <>
            <Navbar />
            <Hero />
            <SobreMi />
            <Proyectos />
            <Habilidades />
            <Contacto />
            <Footer />
        </>
    )
}
export default Inicio