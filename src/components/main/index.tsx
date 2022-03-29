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
