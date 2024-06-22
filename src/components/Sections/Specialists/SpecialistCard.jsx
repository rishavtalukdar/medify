import { Box, Typography } from "@mui/material";

export default function SpecialistCard({ img, title, designation }) {
    return (
        <Box textAlign="center">
            <Box component="img" 
            src={img} width={1} sx={{boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)', borderRadius: '250px 240px 4px 4px' }} />
            <Typography fontSize={{xs:16,md:24}}>{title}</Typography>
            <Typography fontSize={{xs:14,md:16}} color= "#2AA7FF">{designation}</Typography>
        </Box>
    )
}