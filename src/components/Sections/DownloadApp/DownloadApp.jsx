import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";


export default function DownloadApp(){
    return (
        <Box sx={{background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={4.5}>
                        <Box component="img" src={mobile} alt="mobile" width={1} height="auto" />
                    </Grid>
                    <Grid item xs ={12} md={6.5}>

                        <Box position="relative"
                            pl={{ xs: "36px", md: "50px" }}
                            mb={{ xs: 4, md: 0 }}>
                        <Typography variant="h2" mb={2}>
                            Download the
                            <br />
                            <Box component="span" color="primary.main">
                                Medify{" "}
                            </Box>
                            App
                        </Typography>

                        <Box
                            src={arrow}
                            component="img"
                            width={{ xs: 24, md: 40 }}
                            position="absolute"
                            left={0}
                            top={50}
                        />

                        <Stack  spacing={1.5}  direction={{ xs: "column", md: "row" }}>
                                <Button
                                    sx={{
                                        bgcolor: "#333",
                                        color: "#fff",
                                        py: 1.5,
                                        borderRadius: 1.5,
                                    }}
                                    variant="contained"
                                    disableElevation
                                    size={"large"}
                                    startIcon={<img src={playstore} alt="playstore" height={24} />}
                                >
                                    Google Play
                                </Button>

                            <Button
                                    sx={{
                                        bgcolor: "#333",
                                        color: "#fff",
                                        py: 1.5,
                                        borderRadius: 1.5,
                                    }}
                                    variant="contained"
                                    disableElevation
                                    size={"large"}
                                    startIcon={<img src={apple} alt="apple" height={24} />}   
                                >
                                Google Play
                            </Button>
                        </Stack>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}