import './App.css';
import { useState } from 'react'
import Slot from './Components/Slot';

function App() {
  let [score, setScore] = useState(0)

  const createSlot = () => {
    let mounts = []
    for(let i=0; i<9; i++){
      mounts.push(<Slot key={i} setScore={setScore} score={score} />)
    }

    return (
      <div>
        {mounts}
      </div>
    )
  }

  return (
    <div className='App'>
      <h1> React-A-Mole </h1>
      {score}
      {createSlot()}
    </div>
  );
}

export default App;
