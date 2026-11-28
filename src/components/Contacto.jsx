import {Box, Typography, Container, Grid, Chip, Stack} from "@mui/material"
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

function Contacto(){
    return(
        <Box sx={{padding:'2%'}}>
            <Container maxWidth='xl' disableGutters sx={{display:'flex'/*, justifyContent:'space-between'*/, padding:0}}>
                <Box sx={{justifyContent:'center', alignItems:'center', border:'solid 1px black', width:'100%', padding:'1%'}}>
                    <Typography sx={{color:'#3e2e66', fontWeight:'bold', fontSize:'1.8rem', paddingBottom:'1%'}}>
                        <MailOutlinedIcon sx={{color:'#8a66b6'}}/>
                        {' '}Contacto
                    </Typography>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default Contacto