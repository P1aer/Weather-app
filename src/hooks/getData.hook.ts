import React, { useState} from "react";
import {useAppDispatch} from "../redux/hooks";
import {setData, WeatherCity, WeatherData, setCity} from "../redux/slices/weather";

export const useData = (path ='weather.json',city = 'city.json' ) => {
    const [loading, isLoading] = useState(true)
    const [error, setError] = useState<string[]>([])

    const dispatch = useAppDispatch()

        React.useEffect(() => {
            (async () => {
                try {
                    isLoading(true)
                    const cit = await  fetch(city)
                    const ts = await cit.json()
                    dispatch(setCity(ts))
                    const arr = await fetch(path);
                    const js = await arr.json();
                    dispatch(setData(js))
                    isLoading(false)


                } catch (err:any) {
                    setError(prevState => [...prevState, err.message])
                    isLoading(false)
                }
            })();
        }, [])
    return {loading, error }
}

