import {Box, Typography, Container} from "@mui/material"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function SobreMi(){
    return(
        <Box sx={{padding:'2% 2% 0 2%'}}>
            <Container maxWidth='xl' disableGutters sx={{display:'flex', justifyContent:'space-between', padding:0}}>
                <Box sx={{justifyContent:'center', alignItems:'center', border:'solid 1px black', maxWidth:'40%', width:'100%', padding:'1%'}}>
                    <Typography sx={{color:'#3e2e66', fontWeight:'bold', fontSize:'1.8rem'}}>
                        <PersonOutlinedIcon sx={{color:'#8a66b6'}}/>
                        {' '}Sobre mí
                    </Typography>
                    <Typography sx={{color:'#3e2e66'}}>
                        Soy un estudiante apasionado por la tecnologia, que disfruta aprender nuevas herramientas, 
                            resolver problemas y crear aplicaciones utiles. Me interesa especialmente el desarrollo 
                            de software con enfoque practico, funcional y con buen diseño.
                    </Typography>
                </Box>
                <Box sx={{display:"flex", justifyContent:'center', alignItems:'center', border:'solid 1px black', maxWidth:'59%', width:'100%', padding:'1%'}}>
                    <Box sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', border:'solid 1px black', width:'100%', height:'100%', marginRight:'1%', padding:'1%'}}>
                        <SchoolOutlinedIcon sx={{color:'#8a66b6', fontSize:'3rem'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}>Estudiante</Typography>
                        <Typography sx={{color:'#3e2e66'}}>En formacion y con ganas de crecer</Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', border:'solid 1px black', width:'100%', height:'100%', padding:'1%'}}>
                        <CodeOutlinedIcon sx={{color:'#8a66b6', fontSize:'3rem'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}>Desarrollo web</Typography>
                        <Typography sx={{color:'#3e2e66'}}>Creacion de aplicaciones web modernas</Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', border:'solid 1px black', width:'100%', height:'100%', marginLeft:'1%', padding:'1%'}}>
                        <TrendingUpOutlinedIcon sx={{color:'#8a66b6', fontSize:'3rem'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}>Aprendizaje continuo</Typography>
                        <Typography sx={{color:'#3e2e66'}}>Siempre explorando nuevas herramientas y tecnologias</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SobreMi