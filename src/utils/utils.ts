import {WeatherData} from "../redux/slices/weather";

export const getNearestDate = (arr: WeatherData[]) => {

}
export const toCelsius = (temp: number) => Math.round(temp - 273)
export const toFahrenheit = (temp: number) => toCelsius(temp) * 9/5 + 32
