import {Box, Stack, Typography,Container, Grid } from "@mui/material"
import BlogsCard from "./BlogsCard";


export default function Blogs(){
    return (
        <Box py={6}>
            <Typography color="#2AA7FF" fontWeight={600} textAlign='center'> Blogs & News</Typography>
            <Typography variant="h2" mb={2} alignItems="center"></Typography>
            <Grid container spacing={4}>
                <Grid item xs ={12} md={4}><BlogsCard/></Grid>
                <Grid item xs ={12} md={4}><BlogsCard/></Grid>
                <Grid item xs ={12} md={4}><BlogsCard/></Grid>
            </Grid>
        </Box>
    )

}