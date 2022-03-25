import React, {FC} from "react";
import {Card, Typography} from "@mui/material";

const Today:FC = () => {
    return (<>
        <section className="day-time">
            <Card className="t-time" elevation={2}>
                <b>morn</b>
            </Card>
            <Card className="t-time" elevation={2}>
                <b>day</b>
            </Card>
            <Card className="t-time" elevation={2}>
               <b>eve</b>
            </Card>
            <Card className="t-time" elevation={2}>
                <b>night</b>
            </Card>
        </section>
        <h1 className='h1-f'>Forecast for today</h1>
        <section className='all-data'>
            <Card elevation={2}>
                <Typography>
                    Sunrise & Sunset
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Moonrise & Moonset
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Max & Min Temperature
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Pressure
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Humidity
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Dew Point
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Wind Status
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Probability of Precipitation
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    UV Index
                </Typography>
            </Card>
            <Card elevation={2}>
                <Typography>
                    Visibility
                </Typography>
            </Card>
        </section>
    </>)
}

export default Today;
