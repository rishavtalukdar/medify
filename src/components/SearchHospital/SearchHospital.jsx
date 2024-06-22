import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchHospital() {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({ state: "", city: "" });
    const navigate = useNavigate();


    useEffect(()=>{
        const fetchStates =async()=>{
            try{
                let response = await axios.get("https://meddata-backend.onrender.com/states")
                setStates(response.data)
            }catch(e){
                console.error("Error fetching states:",e)
            }
        }
        fetchStates()
    },[])


    useEffect(()=>{
        const fetchCities =async()=>{
            setCities([])
            setFormData((prev)=>({...prev,city: ""}))
            try{
                let response = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`)
                setCities(response.data)
            }catch(e){
                console.error("Error fetching states:",e)
            }
        }

        if(formData.state!==""){
            fetchCities()
        }
    },[formData.state])


    const handleSubmit =(e)=>{
        e.preventDefault()
        if (formData.state && formData.city) {
            navigate(`/search?state=${formData.state}&city=${formData.city}`);
        }
    }


    const handleChange=(event)=>{
        const {name , value} =event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    return(
        <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
            <Select
            displayEmpty
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            required
            sx={{minWidth: 200, width: "100%"}}
            >
                <MenuItem disabled value="" selected>
                    State
                </MenuItem>
                {states.map((state) => (
                    <MenuItem key={state} value={state}>
                        {state}
                    </MenuItem>
        ))}
            </Select>

            <Select
            displayEmpty
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
            required
            sx={{minWidth: 200, width: "100%"}}
            >
                <MenuItem disabled value="" selected>
                    City
                </MenuItem>
                {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                        {city}
                    </MenuItem>
        ))}
            </Select>
            <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{ py: "15px", px: 8, flexShrink: 0 }}
                disableElevation
            >
                Search
            </Button>
        </Box>
    )
}