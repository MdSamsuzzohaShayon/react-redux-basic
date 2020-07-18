import React, { useState } from 'react';
import './Count.css';

// WE CAN USE HOOK ONLY IN THE FUNCTION COMPONENT NOT INSIDE CLASS COMPONENT
// ALL HOOK NEED TO EXECUTE IN SAME ORDER, WE CAN'T PUT HOOK INSIDE IF STATEMNT, CAN'T PUT INSIDE FUNCTION, CAN'T USE INSIDE LOOPS
// IT MUST BE IN THE TOP LABEL

// function countInitial() {
//     console.log("Running function, it's run every single time when we run the component");
//     return 4
// }

function Count() {
    //  USE STATE RETURN ARRAY WITH TWO VALUE
    // THERE IS TWO WAY TO PASS STATE FIRST DESTRUCTURE    
    // const [count, setCount] = useState(4);

    // AND SECOND WAY CALLBACK FUNCTION || WHEN WE HAVE COMPLEX VERSION WE SHOULD USE THIS WAY
    // const [count, setCount] = useState(()=>console.log("Running function, it's run every single time when we run the component", 4));
    // const [count, setCount] = useState(countInitial); 


    const [count, setCount] = useState(4);
    const [theme, setTheme] = useState('blue');



    function decrementCount() {
        setCount(prevCount => prevCount-1);
    }
    function incrementCount() {
        setCount(prevCount => prevCount+1);
        setTheme('red');
    }
    return (
        <div className="Count">
            <br /><br />
            <div className="elmt">
                <button className="btn" onClick={incrementCount}>+</button>
                <span className="value">{count}</span>
                <span className="value">{theme}</span>
                <button className="btn" onClick={decrementCount}>-</button>
            </div >
        </div>
    )
}


export default Count;