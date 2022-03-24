import React, {FC} from "react";
import {Card, Typography} from "@mui/material";
import {WeatherData, weatherData} from "../../../redux/slices/weather";
import {store} from "../../../redux/store";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

const Week:FC = () => {
   const options:DateTimeFormatOptions = {
      weekday: "short",
   };
   const selector = weatherData(store.getState());

   const dates = [];
   for(let i = 1 ; i<=7;i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push(d)
   }
   const d1 = new Date((selector as WeatherData)?.current?.sunrise  * 1000)
   const d2 = new Date((selector as WeatherData)?.current?.sunset  * 1000)
   return ( <>
      <section className='cards'>
      <div className='grid-cards'>
         {
            dates.map((elem,ind) => {
               return(
                   <Card className='card' key={ind}  elevation={2 }>
                      <h4>{elem.toLocaleDateString('en',options)}</h4>
                      <img className='card-img'
                           alt='weather img'
                           src='https://memepedia.ru/wp-content/uploads/2021/10/chelovechek-pokazyvaet-bolshoj-palec-14.jpg'/>
                      <p><b>5°</b> <span>8°</span></p>
                   </Card>)
            })
         }
      </div>
   </section>
   <section className='highlights'>
      <h1>Highlights</h1>
      <div className='w-data'>
         <Card elevation={2 }>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               UV Index
            </Typography>
         </Card>
         <Card elevation={2 }>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Wind Status
            </Typography>
         </Card>
         <Card elevation={2}>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Sunrise & Sunset
            </Typography>

            <Typography mb="5px" variant='h6' component='h4'>
               <img src="sunrise.png" alt="sunrise icon"/> {d1.getHours()} : {d1.getMinutes()}
            </Typography>
            <Typography variant='h6' component='h4'>
               <img src="sunset.png" alt="sunset icon"/>  {d2.getHours()} : {d2.getMinutes()}
            </Typography>
         </Card>
         <Card elevation={2 }>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Humidity
            </Typography>
         </Card>
         <Card elevation={2 }>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Visibility
            </Typography>
         </Card>
         <Card elevation={2 }>
            <Typography mb="0.95rem" sx={{opacity: .6}} variant="h5" component={"h3"}>
               Min & Max Temperature
            </Typography>
         </Card>
         <img className='map' src='https://c.tenor.com/rQPQLim9lCwAAAAC/veibae-vei-nodders.gif'/>
      </div>
   </section>
      </>)
}

export default Week;
