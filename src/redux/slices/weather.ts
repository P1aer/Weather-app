import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../store";

export type WeatherCurrentData = {
    "dt":number,
    "sunrise":number,
    "sunset":number,
    "temp":number,
    "feels_like":number,
    "pressure":number,
    "humidity":number,
    "dew_point":number,
    "uvi":number,
    "clouds":number,
    "visibility":number,
    "wind_speed":number,
    "wind_deg":number,
    "wind_gust"?:number,
    "weather":[{
        "id":number,
        "main": string,
        "description":string,
        "icon":string
    }],
    "rain"?: {
        "1h"?: number
        "3h"?: number
    }
    "snow"?: {
        "1h"?: number
        "3h"?:number
    }
}
export type  WeatherDataDaily =     {
    "dt": number,
    "sunrise": number,
    "sunset": number,
    "moonrise":number,
    "moonset": number,
    "moon_phase": number,
    "temp": {
        "day": number,
        "min": number,
        "max": number,
        "night": number,
        "eve": number,
        "morn": number
    },
    "feels_like": {
        "day": number,
        "night": number,
        "eve": number,
        "morn": number
    },
    "pressure": number,
    "humidity": number,
    "dew_point": number,
    "wind_speed": number,
    "wind_deg": number,
    "wind_gust"?:number,
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],

    "clouds": number,
    "pop":  number,
    "rain"?:  number,
    "snow"?:  number,
    "uvi":  number
}
export  type  WeatherCity = {
    "name": string,
    "local_names": object
    "lat": number
    "lon": number
    "country": string
    "state": string
}
export type WeatherData = {
    "lat":number,
    "lon":number,
    "timezone":string,
    "timezone_offset":number,
    current: WeatherCurrentData,
    daily: WeatherDataDaily[]

}
interface WeatherState {
    data: WeatherData | null
    city: WeatherCity[] | null
}

const initialState:WeatherState = {
    data: null,
    city: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setData: (state, action: PayloadAction<WeatherData>) => {
            state.data = action.payload
        },
        setCity:(state, action: PayloadAction<WeatherCity[]>) => {
            state.city = action.payload
        },
    },
})

export const { setData, setCity } = weatherSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const weatherData = (state: RootState) => state.weather.data
export const weatherCityData = (state: RootState) => state.weather.city

export default weatherSlice.reducer
