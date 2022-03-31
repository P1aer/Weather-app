import React, {useState} from "react";
import {useAppDispatch} from "../redux/hooks";
import {setCity, setData, WeatherCity, WeatherData} from "../redux/slices/weather";
import {Home} from "@mui/icons-material";

export const CITY_NAME = (city: string) => `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=24da0f10829f7196b261c0c51a882395`
export const WEATHER_PATH = (lon:string|number,lat:string|number) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=24da0f10829f7196b261c0c51a882395`;
export const CITY_PATH = (lon:string|number,lat:string|number) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=24da0f10829f7196b261c0c51a882395`
export const STANDARD_CITY = {coords: {longitude:37.6174943,latitude:55.7504461}}

type Home = {
    city: WeatherCity| null,
    data: WeatherData| null
}

export const useData = () => {
    const [loading, isLoading] = useState(true)
    const [home, setHome] = useState<Home>({
        city:null,
        data: null
    })
    const [error, setError] = useState<string[]>([])
    const dispatch = useAppDispatch()

    const func = async (pos: { coords: { latitude: number; longitude: number } }) => {
        try {
            isLoading(true)
            const cit = await  fetch(WEATHER_PATH(pos.coords.longitude,pos.coords.latitude))
            const ts = await cit.json()
            setHome((prevState) => ({...prevState, city: {...ts}}))
            dispatch(setCity(ts))
            const arr = await fetch(CITY_PATH(pos.coords.longitude,pos.coords.latitude));
            const js = await arr.json();
            setHome((prevState) => ({...prevState, data: {...js}}))
            dispatch(setData(js))
            isLoading(false)
        } catch (err:any) {
            setError(prevState => [...prevState, err.message])
            isLoading(false)
        }
    }
    const goHome = () => {
        const {city, data} = home;
        dispatch(setCity((city as WeatherCity)))
        dispatch(setData((data as WeatherData)))
    }
        React.useEffect(() => {
            navigator.geolocation.getCurrentPosition(func,
                () => func(STANDARD_CITY))
        },[])
    return {loading, error, goHome }
}

