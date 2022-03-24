import React, {FC, useState} from "react";
import "./main.scss";
import Button from '@mui/material/Button';
import {IconButton} from "@mui/material";
import {store} from "../../redux/store";
import Week from "./pages/week";
import {setTemperature} from "../../redux/slices/app";
import {useAppDispatch} from "../../redux/hooks";
import Today from "./pages/today";

const Main:FC = () => {
    const [temperature, setTemp] = useState(true)
    const [page, setPage] = useState(true)
    const dispatch = useAppDispatch()
/*    React.useEffect(  () => {
       async function data() {
           const fetched =
               await fetch("http://api.openweathermap.org/data/2.5/forecast?id=458774&appid=24da0f10829f7196b261c0c51a882395")
               https://api.openweathermap.org/data/2.5/onecall?lat=55.7522&lon=37.6156&exclude=minutely,hourly,alerts&appid=24da0f10829f7196b261c0c51a882395
           const json = await fetched.json();
           console.log(json)
        }
        data()
    },[])*/

    //todo посматри потом че будет
    return (<div className='main'>
        <nav>
        <div className='days'>
            <Button onClick={() => setPage(false)}
                    className={`${!page ? 'clicked':''}`}
                    size={"large"}>
                Today
            </Button>
            <Button  onClick={() => setPage(true)}
                     className={`${page ? 'clicked':''}`}
                     size={"large"}>
                Week
            </Button>
        </div>
        <div className='measures'>
            <IconButton onClick={()=> {dispatch(setTemperature(true)); setTemp(true)}}
                        className={`btn ${temperature?"clicked":""}`}>
                °C
            </IconButton>
            <IconButton  onClick={()=> {dispatch(setTemperature(false)); setTemp(false)}}
                         className={`btn ${!temperature?"clicked":""}`}>
                °F
            </IconButton>
        </div>
    </nav> {
        page ? <Week/> : <Today/>
    }

    </div>)
}
export default Main;
