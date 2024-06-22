import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    Stack,
    Typography,
  } from "@mui/material";
  import logo from "../../assets/logo.png";
  import fb from "../../assets/fb.png";
  import pinterest from "../../assets/pinterest.png";
  import twitter from "../../assets/twitter.png";
  import yt from "../../assets/yt.png";


  export default function Footer(){
    return (
        <Box bgcolor="#1B3C74" pb={3} pt={6}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
                            <Box component="img" src={logo} alt="Medify" height={36} mb={2} />
                            <Stack direction="row" spacing={1.5}>
                                <Box component="img" src={fb} height={36} />
                                <Box component="img" src={twitter} height={36} />
                                <Box component="img" src={yt} height={36} />
                                <Box component="img" src={pinterest} height={36} />
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>About Us</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Our Pricing</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Our Gallery</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Appointment</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Privacy Policy</Link>
                        </Stack>                    
                    </Grid>


                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Orthology</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Neurology</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Dental Care</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Opthalmology</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Cardiology</Link>
                        </Stack>                    
                    </Grid>


                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>About Us</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Our Pricing</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Our Gallery</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Appointment</Link>
                            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>Privacy Policy</Link>
                        </Stack>                    
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
  }