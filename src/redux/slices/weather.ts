import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../store";

interface WeatherState {
    data:object | null
}

const initialState:WeatherState = {
    data: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setData: (state, action: PayloadAction<object>) => {
            state.data = action.payload
        },
    },
})

export const { setData } = weatherSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const weatherData = (state: RootState) => state.weather.data

export default weatherSlice.reducer
