import { useState } from "react";
import Mole from "./Mole";
import NoMole from "./DirtMount";

// function slot

const Slot = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore= {props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <NoMole toggle={setTheMole} />

    return(
        <div style={{'display':'inline-block', 'width':'30vw'}}>
            {displayMole}
        </div>
    )
}

export default Slot