import { useEffect } from "react";
import {Button} from "./Button"

export const Counter =()=> {
    const [counterA, setCounterA] = usestste(0)
    const [counterB, setCounterB] = usestste(0)
    
    const handleCounterAIncrement = () => {
        setCounterA(prevCounterA =>prevCounterA + 1)
    // this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
    };
    
    handleCounterBIncrement = () => {
        setCounterB(prevCaunterB =>prevCaunterB + 1)
    };

    useEffect(()=>{
    
    
    document.title = `Всього клікнули ${counterA + counterB} разів`;
    console.log(document.title);
    },[counterA, counterB])
    
    
    
   
    
    return (
    <>
    <button
    className='btn'
    type="button"
    onClick={handleCounterAIncrement}
    >
    Клікнули counterA {counterA} разів
    </button>
    
    <button
    className='btn'
    type="button"
    onClick={this.handleCounterBIncrement}
    >
    Клікнули counterB {counterB} разів
    </button>
    </>
    );
    }
    