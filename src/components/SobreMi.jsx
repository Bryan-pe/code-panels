import {Box, Button, Typography, Container} from "@mui/material"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Navbar(){
    return(
        <Box sx={{padding:'2% 2% 0 2%'}}>
            <Container maxWidth='xl' sx={{backgroundImage:"url('/banner.png')", backgroundSize:'cover', backgroundPosition:'center', width:'100%', height:'auto', padding:0, border:'solid 1px black'}}>
                <Box sx={{justifyContent:'center', alignItems:'center'}}>
                    <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}>
                        <PersonOutlinedIcon sx={{color:'#8a66b6'}}/>
                        
                    </Typography>
                    <Typography sx={{color:'#3e2e66'}}></Typography>
                </Box>
                <Box>
                    <Box sx={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <SchoolOutlinedIcon sx={{color:'#8a66b6'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}></Typography>
                        <Typography sx={{color:'#3e2e66'}}></Typography>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <CodeOutlinedIcon sx={{color:'#8a66b6'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}></Typography>
                        <Typography sx={{color:'#3e2e66'}}></Typography>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <TrendingUpOutlinedIcon sx={{color:'#8a66b6'}}/>
                        <Typography sx={{color:'#3e2e66', fontWeight:'bold'}}></Typography>
                        <Typography sx={{color:'#3e2e66'}}></Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar