import React from "react";
import {ItemCount, setCounter, counter}  from "./ItemCount";

export default function ItemListContainer(){

        function onAdd(Producto){
          setCounter(counter +1);

        }
    return(
        <>
            padre container
            <br/>
            <br/>
            <ItemCount onAdd={onAdd}/>

        </>
    )
}
