import React, {FC} from "react";
import "./main.scss";
import Button from '@mui/material/Button';
import {Card, IconButton} from "@mui/material";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

const Main:FC = () => {
    const options:DateTimeFormatOptions = {
        weekday: "short",
    };
    const dates = [];
    for(let i = 0 ; i<=6;i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        dates.push(d)
    }
/*    React.useEffect(  () => {
       async function data() {
           const fetched =
               await fetch("http://api.openweathermap.org/data/2.5/forecast?id=458774&appid=24da0f10829f7196b261c0c51a882395")
           const json = await fetched.json();
           console.log(json)
        }
        data()
    },[])*/
    return (<div className='main'>
        <section className='cards'>
            <nav>
                <div className='days'>
                    <Button size={"large"}>Today</Button>
                    <Button size={"large"}>Week</Button>
                </div>
                <div className='measures'>
                    <IconButton  className='btn'>
                        °C
                    </IconButton>
                    <IconButton className='btn'>
                        °F
                    </IconButton>
                </div>
            </nav>
            <div className='grid-cards'>
                {
                    dates.map((elem,ind) => {
                        return(
                            <Card className='card' key={ind}>
                                <h4>{elem.toLocaleDateString('en',options)}</h4>
                                <img className='card-img'
                                     alt='weather img'
                                     src='https://memepedia.ru/wp-content/uploads/2021/10/chelovechek-pokazyvaet-bolshoj-palec-14.jpg'/>
                                     <p>5° <span>8°</span></p>
                            </Card>)
                    })

                }

            </div>
        </section>
        <section className='highlights'>
            <h1>Highlights</h1>
            <div className='w-data'>
                <Card>
                    somedata
                </Card>
                <Card>
                    somedata
                </Card>
                <Card>
                    somedata
                </Card>
                <Card>
                    somedata
                </Card>
                <Card>
                    somedata
                </Card>
                <Card>
                    somedata
                </Card>
                <img className='map' src='https://c.tenor.com/rQPQLim9lCwAAAAC/veibae-vei-nodders.gif'/>
            </div>
        </section>
    </div>)
}
export default Main;
