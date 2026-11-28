import {Box, Typography, Container, Grid, Chip, Stack} from "@mui/material"

function Footer(){
    return(
        <Box sx={{backgroundColor:'#8a66b6'}}>
            <Container maxWidth='xl' disableGutters sx={{display:'flex'/*, justifyContent:'space-between'*/, padding:0}}>
                <Box sx={{justifyContent:'center', alignItems:'center', width:'100%', padding:'1%'}}>
                    <Typography sx={{color:'#3e2e66', fontWeight:'bold', fontSize:'1.8rem'}}>
                        Footer
                    </Typography>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default Footer