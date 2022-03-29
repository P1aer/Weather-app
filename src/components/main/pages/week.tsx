import React, {FC} from "react";
import {Card, Typography} from "@mui/material";
import {WeatherData} from "../../../redux/slices/weather";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import {getMessage, toCelsius, toFahrenheit} from "../../../utils/utils";
import {useAppSelector} from "../../../redux/hooks";

const Week:FC = () => {
   const options:DateTimeFormatOptions = {
      weekday: "short",
   };
   const selector = useAppSelector(state => state.weather.data)
    const temp = useAppSelector(state => state.settings.temperature)
   const dates = [];
   for(let i = 1 ; i<=7;i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push(d)
   }
   const d1 = new Date((selector as WeatherData)?.current?.sunrise  * 1000)
   const d2 = new Date((selector as WeatherData)?.current?.sunset  * 1000)
   const min = (selector as WeatherData).daily[0].temp.min
   const max = (selector as WeatherData).daily[0].temp.max
   const visibility = (selector as WeatherData).current.visibility
   const wind = (selector as WeatherData).current.wind_speed
   const uv = (selector as WeatherData).current.uvi
   const hum = (selector as WeatherData).current.humidity
   return ( <>
      <section className='cards'>
      <div className='grid-cards'>
         {
            dates.map((elem,ind) => {
               const c_temp = (selector as WeatherData).daily[ind+1].temp.day
               const b_temp = (selector as WeatherData).daily[ind+1].temp.night
               return(
                   <Card className='card' key={ind}  elevation={2 }>
                      <h4>{elem.toLocaleDateString('en',options)}</h4>
                      <img className='card-img'
                           alt='weather img'
                           src={`https://openweathermap.org/img/wn/${(selector as WeatherData).daily[ind+1].weather[0].icon}@4x.png`}/>
                      <p>
                         <b>{temp ? `${toCelsius(c_temp)}°`: `${toFahrenheit(c_temp)}°`}</b>
                         <span>{temp ? `${toCelsius(b_temp)}°`: `${toFahrenheit(b_temp)}°`}</span>
                      </p>
                   </Card>)
            })
         }
      </div>
   </section>
   <section className='highlights'>
      <h1>Highlights</h1>
      <div className='w-data'>
         <Card elevation={2 }>
            <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               UV Index
            </Typography>
            <Typography mb='0.8rem' sx={{display:'flex',alignItems:'center'}} variant="h2">
               <img style={{marginRight: "8px"}} src='uv.png' alt='uv icon'/> {uv}
            </Typography>
            <span style={{fontSize: "1.8rem",fontWeight: "300"}}>{getMessage('uv',uv)}</span>
         </Card>
         <Card elevation={2 }>
            <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Wind Status
            </Typography>
            <Typography variant="h2">
               {wind} <span style={{fontSize: "1.8rem"}}>Metre/sec</span>
               <br/>
               <span style={{fontSize: "1.8rem"}}>{getMessage('wind',wind)}</span>
            </Typography>
         </Card>
         <Card elevation={2}>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Sunrise & Sunset
            </Typography>

            <Typography mb="5px" variant='h6' component='h4'>
               <img src="sunrise.png" alt="sunrise icon"/> {d1.getHours()} : {d1.getMinutes()}
            </Typography>
            <Typography variant='h6' component='h4'>
               <img src="sunset.png" alt="sunset icon"/>  {d2.getHours()} : {d2.getMinutes()}
            </Typography>
         </Card>
         <Card elevation={2 }>
            <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Humidity
            </Typography>
            <Typography mb="0.8rem" className='hum' sx={{display:'flex',alignItems:'center'}}  variant='h2'>
               <img src='humidity.png' alt='humidity icon'/> {hum} <span>%</span>
            </Typography>
            <span style={{fontSize: "1.8rem",fontWeight: "300"}}>{getMessage('humidity',hum)}</span>
         </Card>
         <Card elevation={2 }>
            <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Visibility
            </Typography>

            <Typography variant="h2">
               {visibility /1000} <span style={{fontSize: "1.8rem"}}>Km/h</span>
               <br/>
               <span style={{fontSize: "1.8rem"}}>{getMessage('visibility',visibility /1000)}</span>
            </Typography>
         </Card>
         <Card elevation={2 }>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Max & Min Temperature
            </Typography>
            <Typography mb="5px" variant='h6' component='h4'>
               <img src='maxt.png' alt='max temperature icon'/>{temp ? `${toCelsius(max)}°C`: `${toFahrenheit(max)}°F`}
            </Typography>
            <Typography  variant='h6' component='h4'>
               <img src='mint.png' alt='min temperature icon'/> {temp ? `${toCelsius(min)}°C`: `${toFahrenheit(min)}°F`}
            </Typography>
         </Card>
         <img className='map' src='https://c.tenor.com/rQPQLim9lCwAAAAC/veibae-vei-nodders.gif'/>
      </div>
   </section>
      </>)
}

export default Week;
