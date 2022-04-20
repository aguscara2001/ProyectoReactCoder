import React, {useEffect,useState} from 'react'
import { TraerProducto } from '../utils/products';

const ItemDetailContainer = () => {
  
  const [item,setItem] = useState([]);
        useEffect(()=> {
            TraerProducto()
            .then((productos)=>{
                setItem(productos)
            })
        },[])
  
  
  return (
    <>
    </>
  )
}

export default ItemDetailContainer