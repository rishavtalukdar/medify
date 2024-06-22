import {
    Box,
    Typography,
    Container,
    Button,
    Stack,
    useMediaQuery,
    IconButton,
    Grid
  } from "@mui/material";
  import img from '../../assets/home.webp'
  import { Link } from 'react-router-dom';


  export default function HeroSlider(){
    return(

        <Box p={2}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h3' component='h1'>Skip the travel! Find Online</Typography>
                    <Typography variant='h1' component='h1' mb={1}>Medical <span style={{ color: '#2AA7FF' }}>Centers</span></Typography>
                    <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                        Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                    </Typography>
                    <Link to='/search'>
                            <Button variant='contained' size="large" disableElevation>
                                Find Centers
                            </Button>
                        </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" src={img} width={1}/>
                </Grid>
            </Grid>
        </Box>
    )
  }