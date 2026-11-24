import {Box, Button, Typography, Container} from "@mui/material"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Navbar(){
    return(
        <Box sx={{padding:'2% 2% 0 2%'}}>
            <Container maxWidth='xl' sx={{border:'solid 1px black', justifyContent:'space-evenly', display:'flex'}}>
                <Box sx={{justifyContent:'center', alignItems:'center', border:'solid 1px black', maxWidth:'40%', padding:'1%'}}>
                    <Typography sx={{color:'#3e2e66', fontWeight:'bold', fontSize:'1.8rem'}}>
                        <PersonOutlinedIcon sx={{color:'#8a66b6'}}/>
                        Sobre mí
                    </Typography>
                    <Typography sx={{color:'#3e2e66'}}>
                        Soy un estudiante apasionado por la tecnologia, que disfruta aprender nuevas herramientas, 
                            resolver problemas y crear aplicaciones utiles. Me interesa especialmente el desarrollo 
                            de software con enfoque practico, funcional y con buen diseño.
                    </Typography>
                </Box>
                <Box sx={{display:"flex", justifyContent:'center', alignItems:'center', border:'solid 1px black', maxWidth:'40%', padding:'1%'}}>
                    <Box sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', border:'solid 1px black'}}>
                        <SchoolOutlinedIcon sx={{color:'#8a66b6'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}>asdasd</Typography>
                        <Typography sx={{color:'#3e2e66'}}>asdasd</Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', border:'solid 1px black'}}>
                        <CodeOutlinedIcon sx={{color:'#8a66b6'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}>asdasda</Typography>
                        <Typography sx={{color:'#3e2e66'}}>asdasd</Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', border:'solid 1px black'}}>
                        <TrendingUpOutlinedIcon sx={{color:'#8a66b6'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}>asdasd</Typography>
                        <Typography sx={{color:'#3e2e66'}}>asdasda</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar