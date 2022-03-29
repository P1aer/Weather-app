export const LIMITS = {
    wind: {
        "calm" : 0.2,
        "gentle wind": 1.5,
        "light breeze" : 3.3,
        "gentle breeze": 5.4,
        "moderate breeze" : 7.9,
        "fresh breeze": 10.7,
        "strong breeze" : 13.8,
        "strong wind": 17.1,
        "storm" : 20.7,
        "strong storm": 24.4,
        "full storm": 28.4,
        "hard storm" : 32.6,
        "hurricane" : 100000,
    },
    visibility: {
        "bad visibility": 2.5,
        "average visibility": 5,
        "good visibility": 7.5,
        "clear visibility": 11
    },
    humidity : {
        "dry air" : 30,
        "normal" : 60,
        "high humidity":80,
        "over humidity": 100
    },
    uv: {
        "low" : 2,
        "moderate" : 5,
        "high":7,
        "very high": 10,
        "extreme": 20,
    },
    pressure: {
        "low": 1013,
        "normal": 1020,
        "high": 1200,
    },
    dew: {
        "dry": 55,
        "comfortable": 60,
        "slightly humid":64,
        "humid":69,
        "very humid":75,
        "oppressive":1000,
    }
}
export const getMessage = (key: string, val: number) => {
    const obj = {...LIMITS[key as keyof Object]}
    for( let k in obj) {
        if (obj[(k as keyof object)] >= val) {
            return k
        }
    }
}
export const toCelsius = (temp: number) => Math.round(temp - 273)
export const toFahrenheit = (temp: number) =>+ (toCelsius(temp) * 9/5 + 32).toFixed(2)
