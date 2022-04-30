import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
      <img src={item.imagen} alt={item.nombre}/>
      <div>
        <h2>{item.producto}</h2>
        <h3>{item.price}</h3>
        <h4>{item.descripcion}</h4>
        <h5>{}item.stock</h5>
      </div>


    </div>

  );
};

export default ItemDetail

