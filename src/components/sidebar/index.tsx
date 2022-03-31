import React, {FC, useState} from "react";
import "./sidebar.scss";
import {IconButton, Paper, TextField} from "@mui/material";
import SearchRoundedIcon  from '@mui/icons-material/SearchRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import {setCity, setData, WeatherCity, weatherCityData, WeatherData} from "../../redux/slices/weather";
import {store} from "../../redux/store";
import {toCelsius, toFahrenheit} from "../../utils/utils";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {CITY_PATH, useData, WEATHER_PATH,CITY_NAME} from "../../hooks/getData.hook";

const SideBar:FC = () => {
    const options:DateTimeFormatOptions = {
        hour12: false,
        weekday: "long",
        hour: '2-digit',
        minute: '2-digit',
    };
    const dispatch = useAppDispatch()
    const [city, setCit] = useState("");
    const [query, setQuery] = useState('')
    const {goHome} = useData()
    const now = new Date().toLocaleDateString('en',options)
    const selector = weatherCityData(store.getState());
    const data = useAppSelector(state => state.weather.data)
    const temp = useAppSelector(state => state.settings.temperature)
    const temperature = temp ? toCelsius((data as WeatherData)?.current?.temp)
        : toFahrenheit((data as WeatherData)?.current?.temp)
    React.useEffect(() => {
        ( async () => {
            try {
                if (query !== '') {
                    const newCity = await fetch(CITY_NAME(query))
                    const res = await newCity.json()
                    const cit = await  fetch(WEATHER_PATH(res[0].lon,res[0].lat))
                    const ts = await cit.json()
                    const arr = await fetch(CITY_PATH(res[0].lon,res[0].lat))
                    const js = await arr.json();
                    dispatch(setCity(ts))
                    dispatch(setData(js))
                }
            }
            catch (e:any) {
               alert("Данные введены неправильно")
            }
        })()
    },[query])
    return (
        <Paper className='paper' >
        <div className="top-search">
            <TextField
                onKeyPress={(event) => {
                    if(event.key === 'Enter')
                    {
                        setQuery(city)
                        setCit('')
                    }
                }}
                value={city}
                onChange={(event => setCit(event.target.value))}
                className='search-bar'
                type="search"
                variant="outlined"
                size={"small"}
                sx={{backgroundColor:"#f0f0f0", width:"75%"}}
            />
            <SearchRoundedIcon sx={{fontSize:24}} className='search-icon'/>
            <IconButton onClick={goHome} sx={{backgroundColor: "#f0f0f0"}}>
                <HomeOutlinedIcon sx={{color: 'black'}}/>
            </IconButton>
        </div>
         <img className='weather-img' alt='weather img'
              src={`https://openweathermap.org/img/wn/${(data as WeatherData).current.weather[0].icon}@4x.png`}/>
              <div className='weather-info'>
                  <span className='w-num'>{temperature} <span className='w-grad'>{temp ? "°C": "°F"}</span></span>
                  <h3 className='w-city'>{(selector as WeatherCity)?.name}, {(selector as WeatherCity)?.sys.country} </h3>
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
