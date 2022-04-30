import React, {useEffect,useState} from 'react'
import { TraerProducto } from '../utils/products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const {id} = useParams()


  const [producto, setProducto] = useState([])

  useEffect(() => {
    
    

  }, [id])
  
  
  const [item,setItem] = useState([]);


        useEffect(()=> {
            TraerProducto()
            .then((producto)=>{
                setItem(producto)
            })
        },[])
  
  
  return (
    <>
    ID dinamico: {id};
    <ItemDetail item = {item}/>
    </>
  )
}

export default ItemDetailContainer