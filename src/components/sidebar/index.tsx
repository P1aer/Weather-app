import React, {FC} from "react";
import "./sidebar.scss";
import {IconButton, Paper, TextField} from "@mui/material";
import SearchRoundedIcon  from '@mui/icons-material/SearchRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import {WeatherCity, weatherCityData} from "../../redux/slices/weather";
import {store} from "../../redux/store";

const SideBar:FC = () => {
    const options:DateTimeFormatOptions = {
        weekday: "long",
        hour: '2-digit',
        minute: '2-digit',
    };
    const now = new Date().toLocaleDateString('en',options)
    const selector = weatherCityData(store.getState());
    return (
        <Paper className='paper' >
        <div className="top-search">
            <TextField
                className='search-bar'
                type="search"
                variant="outlined"
                size={"small"}
                sx={{backgroundColor:"#f0f0f0"}}
            />
            <SearchRoundedIcon sx={{fontSize:24}} className='search-icon'/>
            <IconButton sx={{backgroundColor: "#f0f0f0"}}>
                <HomeOutlinedIcon sx={{color: 'black'}}/>
            </IconButton>
        </div>
         <img className='weather-img' alt='weather img'
              src='https://i.pinimg.com/474x/7f/ca/f9/7fcaf995a17a07a35732cdbb5a24f79c.jpg'/>
              <div className='weather-info'>
                  <span className='w-num'>2 <span className='w-grad'>°C</span></span>
                  <h3 className='w-city'>{(selector as WeatherCity[])[0]?.name}, {(selector as WeatherCity[])[0]?.country} </h3>
                  <sub>{now}</sub>

              </div>
            <hr/>
            <ul className="weather-extra" >
                <li>Some extra 1</li>
                <li> Some extra 2</li>
            </ul>
    </Paper>)
}
export default SideBar;
