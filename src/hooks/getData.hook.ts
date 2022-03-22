import React, { useState} from "react";
import {useAppDispatch} from "../redux/hooks";
import {setData} from "../redux/slices/weather";

export const useData = (path ='data.json' ) => {
    const [loading, isLoading] = useState(true)
    const [data, setWeather] = useState({})
    const dispatch = useAppDispatch()
    const [error, setError] = useState<string[]>([])
        React.useEffect(() => {
            (async () => {
                try {
                    isLoading(true)
                    const arr = await fetch(path);
                    const js = await arr.json();
                     setWeather(js)
                     dispatch(setData(js))
                } catch (err:any) {
                    setError(prevState => [...prevState, err.message])
                }
                finally {
                    isLoading(false)
                }

            })();
        }, [])
    return [loading, data, error, setWeather]
}

