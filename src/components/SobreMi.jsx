import {Box, Button, Typography, Container} from "@mui/material"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

function Navbar(){
    return(
        <Box sx={{padding:'2% 2% 0 2%'}}>
            <Container maxWidth='xl' sx={{backgroundImage:"url('/banner.png')", backgroundSize:'cover', backgroundPosition:'center', width:'100%', height:'auto', padding:0, border:'solid 1px black'}}>
                <Box>
                    <Typography></Typography>
                    <Typography></Typography>
                </Box>
                <Box>
                    <Box sx={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <SchoolOutlinedIcon sx={{color:'#8a66b6'}}/>
                        <Typography></Typography>
                        <Typography></Typography>
                    </Box>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar