import React, {useEffect,useState} from "react";
import {TraerProductos}  from "../utils/products";
import ItemList from "./ItemList";



export default function ItemListContainer({saludo}){  
    const [items,setItems] = useState([]);
        useEffect(()=> {
            TraerProductos()
            .then((productos)=>{
                setItems(productos)
            })
        },[])
        
    return(
        <>
            <h2>ItemListContainer</h2>
            <h3>{saludo}</h3>
            <ItemList productos= {items}/>
        </>
    )
}
