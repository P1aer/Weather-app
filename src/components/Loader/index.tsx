import React, {FC} from 'react';
import "./loader.scss"

const Loader:FC = () => {
    return (<div className='loader'>
        <img src="https://c.tenor.com/rQPQLim9lCwAAAAC/veibae-vei-nodders.gif" alt='loader'/>
        <h4>Loading weather ...</h4>
    </div>)
}
export default Loader;
