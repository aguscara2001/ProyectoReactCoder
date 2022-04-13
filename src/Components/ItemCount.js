import React, {useState} from "react";

export default function ItemCount(){

    const [counter,setCounter] = useState(0);

    function aumentar() {
        setCounter(counter + 1)
    }

    function disminuir(){
        setCounter(counter - 1)
    }

    return(
    <>
        <h1>Contador</h1>
        <p>{counter}</p>
        <button onClick={aumentar}>+</button>
        <button onClick={disminuir}>-</button>
    </>
    );
}