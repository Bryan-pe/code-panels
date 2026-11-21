import {AppBar, Box, Button, Toolbar, Typography, Container} from "@mui/material"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <Box sx={{backgroundImage:"url('/banner.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'auto', padding: 0}}>
            <Container maxWidth='xl'>
                <Box sx={{gap: 2, padding: '10%'}}>
                    <Typography>
                        Hola, soy <Box component="span">Bryan</Box>
                    </Typography>
                    <Typography>
                        Estudiante de desarrollo de software, apasionado por la tecnologia, la creacion de aplicaciones web y el aprendizaje constante.
                    </Typography>
                    <Box>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar