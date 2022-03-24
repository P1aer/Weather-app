import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export interface SettingsState {
    temperature: boolean
}

const initialState:SettingsState = {
    temperature: true
}

export const appSlice = createSlice({
    name: 'settings',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTemperature: (state, action: PayloadAction<boolean>) => {
            state.temperature = action.payload
        },
    },
})

export const { setTemperature } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const appDataTemp = (state: RootState) => state.settings.temperature

export default appSlice.reducer
