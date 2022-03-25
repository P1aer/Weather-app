

export const toCelsius = (temp: number) => Math.round(temp - 273)
export const toFahrenheit = (temp: number) => toCelsius(temp) * 9/5 + 32
