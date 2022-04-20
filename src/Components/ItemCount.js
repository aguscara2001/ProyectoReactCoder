import React, {useState} from "react";
import { Button } from "react-bootstrap";

export default function ItemCount({stock, inicial}){

    const [counter,setCounter] = useState(inicial);

    function aumentar() {
        if(counter < stock){
            setCounter(counter + 1)
        }
    }

    function disminuir(){
        if(counter >= 1){
            setCounter(counter - 1)
        }
        
    }

    return(
    <>
        <h1>Contador</h1>
        <h3>{counter}</h3>
        <Button variant="dark" onClick={aumentar}>+</Button>
        <Button variant="dark" onClick={disminuir}>-</Button>
    </>
    );
}