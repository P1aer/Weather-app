import React, {FC} from "react";
import {Card, Typography} from "@mui/material";
import {useAppSelector} from "../../../redux/hooks";
import {toCelsius, toFahrenheit} from "../../../utils/utils";
import {WeatherData} from "../../../redux/slices/weather";

const Today:FC = () => {
    const selector = useAppSelector(state => state.weather.data)
    const temp = useAppSelector(state => state.settings.temperature)

    const d1 = new Date((selector as WeatherData)?.current?.sunrise  * 1000)
    const d2 = new Date((selector as WeatherData)?.current?.sunset  * 1000)
    const m1 = new Date((selector as WeatherData)?.daily[0]?.moonrise * 1000)
    const m2 = new Date((selector as WeatherData)?.daily[0]?.moonset  * 1000)
    const pop = (selector as WeatherData).daily[0].pop
    const snow = (selector as WeatherData)?.daily[0]?.snow
    const rain = (selector as WeatherData)?.daily[0]?.rain
    const mp = (selector as WeatherData)?.daily[0].moon_phase
    const min = (selector as WeatherData).daily[0].temp.min
    const max = (selector as WeatherData).daily[0].temp.max
    const visibility = (selector as WeatherData).current.visibility
    const pressure = (selector as WeatherData).current.pressure
    const dew = (selector as WeatherData).current.dew_point
    const wind_s = (selector as WeatherData).current.wind_speed
    const wind_d = (selector as WeatherData).current.wind_deg
    const wind_g = (selector as WeatherData).current?.wind_gust
    const uv = (selector as WeatherData).current.uvi
    const hum = (selector as WeatherData).current.humidity
    return (<>
        <section className="day-time">
            <Card className="t-time" elevation={2}>
                <b>morn</b>
                <img src='morning.png' alt='morning img'/>
                <p>
                    <b>{temp ? `${toCelsius((selector as WeatherData).daily[0].temp.morn)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].temp.morn)}°`}/</b>
                    <span> {temp ? `${toCelsius((selector as WeatherData).daily[0].feels_like.morn)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].feels_like.morn)}°`}</span>
                </p>
            </Card>
            <Card className="t-time" elevation={2}>
                <b>day</b>
                <img src='day.png' alt='day img'/>
                <p>
                    <b>{temp ? `${toCelsius((selector as WeatherData).daily[0].temp.day)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].temp.day)}°`}/</b>
                    <span> {temp ? `${toCelsius((selector as WeatherData).daily[0].feels_like.day)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].feels_like.day)}°`}</span>
                </p>
            </Card>
            <Card className="t-time" elevation={2}>
               <b>eve</b>
                <img src='evening.png' alt='evening img'/>
                <p>
                    <b>{temp ? `${toCelsius((selector as WeatherData).daily[0].temp.eve)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].temp.eve)}°`}/</b>
                    <span> {temp ? `${toCelsius((selector as WeatherData).daily[0].feels_like.eve)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].feels_like.eve)}°`}</span>
                </p>
            </Card>
            <Card className="t-time" elevation={2}>
                <b>night</b>
                <img src='night.png' alt='night img'/>
                <p>
                    <b>{temp ? `${toCelsius((selector as WeatherData).daily[0].temp.night)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].temp.night)}°`}/</b>
                    <span> {temp ? `${toCelsius((selector as WeatherData).daily[0].feels_like.night)}°`
                        : `${toFahrenheit((selector as WeatherData).daily[0].feels_like.night)}°`}</span>
                </p>
            </Card>
        </section>
        <h1 className='h1-f'>Forecast for today</h1>
        <section className='all-data'>
            <Card elevation={2}>
                <Typography mb="1.2em" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Sunrise & Sunset
                </Typography>

                <Typography mb="5px" variant='h6' component='h4'>
                    <img src="sunrise.png" alt="sunrise icon"/> {d1.getHours()} : {d1.getMinutes()}
                </Typography>
                <Typography variant='h6' component='h4'>
                    <img src="sunset.png" alt="sunset icon"/>  {d2.getHours()} : {d2.getMinutes()}
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Moonrise & Moonset
                </Typography>
                <Typography variant='h4'>
                    <img className='small' src="moonrise.png" alt="rise icon"/> {m1.getHours()} : {m1.getMinutes()}
                </Typography>
                <Typography variant='h4'>
                    <img className='small' src="moonset.png" alt="set icon"/>{m2.getHours()} : {m2.getMinutes()}
                </Typography>
                <Typography variant='h4'>
                    <img className='small' src="moonphase.png" alt="phase icon"/> {mp * 100}%
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Temperatures
                </Typography>
                <Typography mb="5px" variant='h6' component='h4'>
                    <img src='maxt.png' alt='max temperature icon'/>{temp ? `${toCelsius(max)}°C`: `${toFahrenheit(max)}°F`}
                </Typography>
                <Typography  variant='h6' component='h4'>
                    <img src='mint.png' alt='min temperature icon'/> {temp ? `${toCelsius(min)}°C`: `${toFahrenheit(min)}°F`}
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Pressure
                </Typography>
                <Typography variant="h2">
                    {pressure} <span style={{fontSize: "1.8rem"}}>hPa</span>
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Humidity
                </Typography>
                <Typography className='hum' sx={{display:'flex',alignItems:'center'}}  variant='h2'>
                    <img src='humidity.png' alt='humidity icon'/> {hum} <span>%</span>
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Dew Point
                </Typography>
                <Typography sx={{display:'flex',alignItems:'center'}} variant="h2">
                    <img style={{marginRight: "10px"}} src='dew.png' alt='dew icon'/>
                    {temp ? `${toCelsius(dew)}°C`: `${toFahrenheit(dew)}°F`}
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Wind Status
                </Typography>
                <Typography mb='5px' variant='h3'>
                    Speed: {wind_s} metre/sec
                </Typography>
                <Typography mb='5px' variant='h3'>
                    Deg: {wind_d}°
                </Typography>
                { wind_g ?  <Typography variant='h3'>
                    Gust: {wind_g} metre/sec
                </Typography> : <></>}
            </Card>
            <Card elevation={2}>
                <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                   Precipitations
                </Typography>
                <Typography mb="8px" variant="h3">
                    Probability: {pop * 100}%
                </Typography>
                {rain ?   <Typography variant="h3">
                    <img src="rain.png" className='small' alt="rain icon"/>{rain} mm
                </Typography> : <></>}
                {snow ?   <Typography variant="h3">
                    <img src="snow.png" className='small' alt="snow icon"/>{snow} mm
                </Typography> : <></>}
            </Card>
            <Card elevation={2}>
                <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    UV Index
                </Typography>
                <Typography sx={{display:'flex',alignItems:'center'}} variant="h2">
                    <img style={{marginRight: "8px"}} src='uv.png' alt='uv icon'/> {uv}
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography mb="1.5rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
                    Visibility
                </Typography>

                <Typography variant="h2">
                    {visibility /1000} <span style={{fontSize: "1.8rem"}}>Km/h</span>
                </Typography>
            </Card>
        </section>
    </>)
}

export default Today;
