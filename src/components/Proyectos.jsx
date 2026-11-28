import {Box, Typography, Container, Grid} from "@mui/material"
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';

function Proyectos(){
    return(
        <Box sx={{padding:'2% 2% 0 2%'}}>
            <Container maxWidth='xl' disableGutters sx={{display:'flex'/*, justifyContent:'space-between'*/, padding:0}}>
                <Box sx={{justifyContent:'center', alignItems:'center', border:'solid 1px black', width:'100%', padding:'1%'}}>
                    <Typography sx={{color:'#3e2e66', fontWeight:'bold', fontSize:'1.8rem', paddingBottom:'1%'}}>
                        <LaptopOutlinedIcon sx={{color:'#8a66b6'}}/>
                        {' '}Proyectos
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        <Grid size={6} sx={{border:'solid 1px black'}}>
                            hola
                        </Grid>
                        <Grid size={6} sx={{border:'solid 1px black'}}>
                            hola
                        </Grid>
                        <Grid size={6} sx={{border:'solid 1px black'}}>
                            hola
                        </Grid>
                        <Grid size={6} sx={{border:'solid 1px black'}}>
                            hola
                        </Grid>
                    </Grid>
                </Box>
                
            </Container>
        </Box>
    )
}

export default Proyectos