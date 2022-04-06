import React, {useState} from "react";

export default function ItemCount(onAdd){

    const [counter,setCounter] = useState(1);

    return(
    <>
        <button>-</button>
        contador: {counter}
        <button>+</button>
        <button onClick={() => onAdd()}>Agregar Al Carrito </button>
    </>
    );
}