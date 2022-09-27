import { useEffect } from "react";
import dirtMount from '../Assets/molehill.png';

const NoMole = (props) => {

    useEffect(()=>{
        let randomSec = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSec)
        return () => clearTimeout(timer)
    })
    
    return (
        <div>
            <img alt='Dirt Mount'style={{'width': '30vw'}} src={dirtMount}/>
        </div>
    )
}

export default NoMole