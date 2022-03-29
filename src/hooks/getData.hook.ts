import React, { useState} from "react";
import {useAppDispatch} from "../redux/hooks";
import {setData, setCity} from "../redux/slices/weather";

export const WEATHER_PATH = (lon:string|number,lat:string|number) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=24da0f10829f7196b261c0c51a882395`;
export const CITY_PATH = (lon:string|number,lat:string|number) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=24da0f10829f7196b261c0c51a882395`
export const STANDARD_CITY = {coords: {longitude:37.6174943,latitude:55.7504461}}

export const useData = () => {
    const [loading, isLoading] = useState(true)
    const [error, setError] = useState<string[]>([])

    const dispatch = useAppDispatch()
    const func = async (pos: { coords: { latitude: number; longitude: number } }) => {
        try {
            isLoading(true)
            const cit = await  fetch(WEATHER_PATH(pos.coords.longitude,pos.coords.latitude))
            const ts = await cit.json()
            dispatch(setCity(ts))
            const arr = await fetch(CITY_PATH(pos.coords.longitude,pos.coords.latitude));
            const js = await arr.json();
            dispatch(setData(js))
            isLoading(false)
        } catch (err:any) {
            setError(prevState => [...prevState, err.message])
            isLoading(false)
        }
    }
        React.useEffect(() => {
            navigator.geolocation.getCurrentPosition(func,
                () => func(STANDARD_CITY))
        },[])
    return {loading, error }
}

