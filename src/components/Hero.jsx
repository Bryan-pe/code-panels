import {Box, Button, Typography, Container} from "@mui/material"
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

function Navbar(){
    return(
        <Box sx={{padding:'1% 1% 0 1%'}}>
            <Container maxWidth='xl' sx={{backgroundImage:"url('/banner.png')", backgroundSize:'cover', backgroundPosition:'center', width:'100%', height:'auto', padding:0, border:'solid 1px black'}}>
                <Box sx={{padding: '6%', maxWidth:'50%', color:'#3e2e66'}}>
                    <Typography sx={{fontSize:'2.2rem', marginBottom:'5px', fontWeight:'bold', letterSpacing:1}}>
                        Hola, soy <Box component="span" sx={{color:'#b450d3'}}>Bryan</Box>
                    </Typography>
                    <Typography sx={{marginBottom:'10px'}}>
                        Estudiante de desarrollo de software, apasionado por la tecnologia, la creacion de aplicaciones web y el aprendizaje constante.
                    </Typography>
                    <Box sx={{display:'flex', gap:2}}>
                        <Button sx={{backgroundColor:'#8a66b6', color:'white', borderRadius:4, "&:hover":{backgroundColor:'#6550a0'}}}>Ver proyectos</Button>
                        <Button sx={{backgroundColor:'#fcf5ff', color:'black', border:'solid 1px', borderRadius:4, "&:hover":{backgroundColor:'#ebebeb'}}}><MailOutlinedIcon sx={{color:'#6550a0'}}/> Contactame</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar