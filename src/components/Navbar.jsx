import {AppBar, Box, Button, Toolbar, Typography, Container} from "@mui/material"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <AppBar position="static" elevation={0} sx={{backgroundColor:'#8e23cc', color: '#fff'}}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'space-between', flexGrow: 1, gap: 1}}>{/* logo */}
                        <Typography variant="h4" sx={{fontWeight: 'bold', color: '#fff'}}>
                            Code Panels
                        </Typography>
                    </Box>
                    {/* navegacion */}
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <Button component={Link} to="/" sx={{color: '#fff'}}>Inicio</Button>
                        <Button component={Link} to="/SobreMi" sx={{color: '#fff'}}>Sobre mi</Button>
                        <Button component={Link} to="/Proyectos" sx={{color: '#fff'}}>Proyectos</Button>
                        <Button component={Link} to="/Habilidades" sx={{color: '#fff'}}>Habilidades</Button>
                        <Button component={Link} to="/Contacto" sx={{color: '#fff'}}>Contacto</Button>
                        {/*test*/}
                        <Button component={Link} to="/TEST" sx={{color: '#fff'}}>TEST</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar