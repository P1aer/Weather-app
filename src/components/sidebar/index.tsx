import React, {FC} from "react";
import "./sidebar.scss";
import {IconButton, Paper, TextField} from "@mui/material";
import SearchRoundedIcon  from '@mui/icons-material/SearchRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import {WeatherCity, weatherCityData, WeatherData, weatherData} from "../../redux/slices/weather";
import {store} from "../../redux/store";
import {appDataTemp} from "../../redux/slices/app";
import {toCelsius, toFahrenheit} from "../../utils/utils";
import {useAppSelector} from "../../redux/hooks";

const SideBar:FC = () => {
    const options:DateTimeFormatOptions = {
        weekday: "long",
        hour: '2-digit',
        minute: '2-digit',
    };
    const now = new Date().toLocaleDateString('en',options)
    const selector = weatherCityData(store.getState());
    const data = useAppSelector(state => state.weather.data)
    const temp = useAppSelector(state => state.settings.temperature)
    const temperature = temp ? toCelsius((data as WeatherData)?.current?.temp)
        : toFahrenheit((data as WeatherData)?.current?.temp)
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
              src={`https://openweathermap.org/img/wn/${(data as WeatherData).current.weather[0].icon}@4x.png`}/>
              <div className='weather-info'>
                  <span className='w-num'>{temperature} <span className='w-grad'>{temp ? "°C": "°F"}</span></span>
                  <h3 className='w-city'>{(selector as WeatherCity[])[0]?.name}, {(selector as WeatherCity[])[0]?.country} </h3>
                  <sub>{now}</sub>

              </div>
            <hr/>
            <ul className="weather-extra" >
                <li><img src="cloud.png" alt='cloud icon '/>Clouds - {(data as WeatherData).current.clouds}%</li>
                <li><img src="info.png" alt='info icon '/> {(data as WeatherData).current.weather[0].description}</li>
            </ul>
    </Paper>)
}
export default SideBar;
